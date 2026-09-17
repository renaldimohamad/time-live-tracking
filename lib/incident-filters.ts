// ─────────────────────────────────────────────────────────────────────────────
// TIME Live Tracking — Filter Pipeline
//
// Single source of truth for applying filter state to incidents.
// All consumers (map, markers, KPI, charts, table) MUST use this function
// to guarantee consistent data across the entire dashboard.
// ─────────────────────────────────────────────────────────────────────────────

import type { Incident, FilterState, IncidentSummary, PeriodFilter } from "@/types/incident";
import { normalizeProvinceName } from "@/lib/incident-risk";

// ─── Period boundaries ─────────────────────────────────────────────────────────

function getPeriodBoundary(period: PeriodFilter): Date {
  const now = new Date();
  switch (period) {
    case "today":
      return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    case "7d":
      return new Date(now.getTime() - 7 * 86400000);
    case "30d":
    default:
      return new Date(now.getTime() - 30 * 86400000);
  }
}

// ─── Core filter function ──────────────────────────────────────────────────────

/**
 * Apply the active filter state to a dataset of incidents.
 * Returns a new array (does not mutate the input).
 * This is the single data-reduction pipeline used by ALL dashboard sections.
 */
export function applyFilters(incidents: Incident[], filters: FilterState): Incident[] {
  const periodBoundary = getPeriodBoundary(filters.period);

  return incidents.filter((incident) => {
    // 1. Period filter
    const reportedDate = new Date(incident.reportedAt);
    if (reportedDate < periodBoundary) return false;

    // 2. Business unit filter
    if (filters.businessUnit !== "all" && incident.businessUnit !== filters.businessUnit) {
      return false;
    }

    // 3. Severity filter
    if (filters.severity !== "all" && incident.severity !== filters.severity) {
      return false;
    }

    // 4. Province filter — matches against normalized province name
    if (filters.province !== "all") {
      const normalizedIncidentProvince = normalizeProvinceName(incident.province);
      if (normalizedIncidentProvince !== filters.province) return false;
    }

    // 5. Search filter — matches against ID, site, title, and petugas
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase().trim();
      const matchesId = incident.id.toLowerCase().includes(q);
      const matchesSite = incident.site.toLowerCase().includes(q);
      const matchesTitle = incident.title.toLowerCase().includes(q);
      const matchesPetugas = incident.petugas?.toLowerCase().includes(q) ?? false;
      const matchesProvince = incident.province.toLowerCase().includes(q);
      if (!matchesId && !matchesSite && !matchesTitle && !matchesPetugas && !matchesProvince) {
        return false;
      }
    }

    return true;
  });
}

// ─── Aggregation ───────────────────────────────────────────────────────────────

/**
 * Compute KPI summary from a filtered incident array.
 * @param incidents - already-filtered incidents
 * @param scope - display label for the current scope ("Seluruh Indonesia" or province name)
 */
export function computeSummary(incidents: Incident[], scope: string): IncidentSummary {
  const totalIncidents = incidents.length;
  const criticalIncidents = incidents.filter((i) => i.severity === "critical").length;
  const investigatingIncidents = incidents.filter((i) => i.status === "investigating").length;
  const resolvedIncidents = incidents.filter((i) => i.status === "resolved").length;
  const openIncidents = incidents.filter((i) => i.status === "open").length;
  const estimatedLoss = incidents.reduce((sum, i) => sum + i.estimatedLoss, 0);

  const incidentsWithResponse = incidents.filter(
    (i) => i.responseTimeMinutes !== undefined
  );
  const avgResponseMinutes =
    incidentsWithResponse.length > 0
      ? Math.round(
          incidentsWithResponse.reduce((sum, i) => sum + (i.responseTimeMinutes ?? 0), 0) /
            incidentsWithResponse.length
        )
      : 0;

  return {
    totalIncidents,
    criticalIncidents,
    investigatingIncidents,
    resolvedIncidents,
    openIncidents,
    estimatedLoss,
    avgResponseMinutes,
    scope,
  };
}

// ─── Chart data helpers ────────────────────────────────────────────────────────

export interface TrendDataPoint {
  label: string;
  terjadi: number;
  selesai: number;
}

/**
 * Generate 7-day trend data from a filtered incident set.
 */
export function computeTrendData(incidents: Incident[]): TrendDataPoint[] {
  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const now = new Date();
  const result: TrendDataPoint[] = [];

  for (let i = 6; i >= 0; i--) {
    const day = new Date(now.getTime() - i * 86400000);
    const dayStart = new Date(day.getFullYear(), day.getMonth(), day.getDate());
    const dayEnd = new Date(dayStart.getTime() + 86400000);

    const terjadi = incidents.filter((inc) => {
      const d = new Date(inc.reportedAt);
      return d >= dayStart && d < dayEnd;
    }).length;

    const selesai = incidents.filter((inc) => {
      if (!inc.resolvedAt) return false;
      const d = new Date(inc.resolvedAt);
      return d >= dayStart && d < dayEnd;
    }).length;

    result.push({
      label: days[day.getDay()],
      terjadi,
      selesai,
    });
  }

  return result;
}

export interface CategoryDataPoint {
  name: string;
  value: number;
  fill: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  pencurian: "Pencurian",
  geofence_breach: "Geofence Breach",
  disruption_teknis: "Disruption Teknis",
  kerusakan_sarana: "Kerusakan Sarana",
  k3_lingkungan: "K3 & Lingkungan",
  keamanan_fisik: "Keamanan Fisik",
  kebakaran: "Kebakaran",
  vandalisme: "Vandalisme",
  tumpahan_b3: "Tumpahan B3",
};

const CATEGORY_COLORS: Record<string, string> = {
  pencurian: "#EF4444",
  geofence_breach: "#F97316",
  disruption_teknis: "#EAB308",
  kerusakan_sarana: "#3B82F6",
  k3_lingkungan: "#22C55E",
  keamanan_fisik: "#8B5CF6",
  kebakaran: "#DC2626",
  vandalisme: "#6B7280",
  tumpahan_b3: "#0891B2",
};

/**
 * Aggregate incidents by category for the donut chart.
 */
export function computeCategoryData(incidents: Incident[]): CategoryDataPoint[] {
  const counts: Record<string, number> = {};
  for (const inc of incidents) {
    counts[inc.category] = (counts[inc.category] ?? 0) + 1;
  }

  return Object.entries(counts)
    .map(([key, value]) => ({
      name: CATEGORY_LABELS[key] ?? key,
      value,
      fill: CATEGORY_COLORS[key] ?? "#94A3B8",
    }))
    .sort((a, b) => b.value - a.value);
}

export interface BusinessUnitDataPoint {
  name: string;
  incidents: number;
  fill: string;
}

const BU_COLORS: Record<string, string> = {
  "Perkebunan Sawit": "#22C55E",
  "LRT & Transportasi Rel": "#3B82F6",
  "Manajemen Parkir": "#EAB308",
  "Cleaning Services": "#06B6D4",
  "Security Kawasan": "#8B5CF6",
};

/**
 * Aggregate incidents by business unit for the horizontal bar chart.
 */
export function computeBusinessUnitData(incidents: Incident[]): BusinessUnitDataPoint[] {
  const counts: Record<string, number> = {};
  for (const inc of incidents) {
    counts[inc.businessUnit] = (counts[inc.businessUnit] ?? 0) + 1;
  }

  return Object.entries(counts)
    .map(([name, incidents]) => ({
      name,
      incidents,
      fill: BU_COLORS[name] ?? "#94A3B8",
    }))
    .sort((a, b) => b.incidents - a.incidents);
}

// ─── Format helpers ────────────────────────────────────────────────────────────

/**
 * Format a loss value in IDR to a compact display string.
 * e.g. 482500000 → "Rp 482,5M"
 */
export function formatLoss(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `Rp ${(amount / 1_000_000_000).toFixed(1).replace(".", ",")}M`;
  }
  if (amount >= 1_000_000) {
    return `Rp ${(amount / 1_000_000).toFixed(1).replace(".", ",")}Jt`;
  }
  if (amount === 0) return "–";
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

/**
 * Format a date string to Indonesian locale short format.
 */
export function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Format elapsed time since a date as a human-readable string.
 */
export function formatTimeAgo(isoString: string): string {
  const elapsed = Date.now() - new Date(isoString).getTime();
  const minutes = Math.floor(elapsed / 60000);
  if (minutes < 60) return `${minutes}m lalu`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}j lalu`;
  const days = Math.floor(hours / 24);
  return `${days}h lalu`;
}
