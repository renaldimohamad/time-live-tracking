// ─────────────────────────────────────────────────────────────────────────────
// TIME Live Tracking — Incident Type Definitions
// Keep this file framework-agnostic so it can be reused by API layer later.
// ─────────────────────────────────────────────────────────────────────────────

export type IncidentSeverity = "critical" | "high" | "medium" | "low";

export type IncidentStatus = "open" | "investigating" | "resolved";

export type IncidentCategory =
  | "pencurian"
  | "geofence_breach"
  | "disruption_teknis"
  | "kerusakan_sarana"
  | "k3_lingkungan"
  | "keamanan_fisik"
  | "kebakaran"
  | "vandalisme"
  | "tumpahan_b3";

export type BusinessUnit =
  | "Perkebunan Sawit"
  | "LRT & Transportasi Rel"
  | "Manajemen Parkir"
  | "Cleaning Services"
  | "Security Kawasan";

export interface Incident {
  id: string;
  title: string;
  description: string;
  province: string;         // Normalized province name (e.g. "Riau")
  site: string;             // Physical site name
  businessUnit: BusinessUnit;
  category: IncidentCategory;
  severity: IncidentSeverity;
  status: IncidentStatus;
  latitude: number;
  longitude: number;
  reportedAt: string;       // ISO 8601
  resolvedAt?: string;      // ISO 8601, optional
  estimatedLoss: number;    // in IDR
  petugas?: string;         // Field officer
  responseTimeMinutes?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// GeoJSON / Province layer types
// ─────────────────────────────────────────────────────────────────────────────

/** Raw properties from kemendagri GeoJSON */
export interface GeoProvinceProperties {
  no_prop: number;
  nama_prop: string; // UPPERCASE, e.g. "RIAU"
}

/** Normalized province record used inside the application */
export interface NormalizedProvince {
  id: string;        // kebab-case slug, e.g. "riau"
  name: string;      // Display name, e.g. "Riau"
  rawName: string;   // Exact GeoJSON nama_prop value
}

// ─────────────────────────────────────────────────────────────────────────────
// Risk types
// ─────────────────────────────────────────────────────────────────────────────

export type RiskLevel = "critical" | "high" | "medium" | "low" | "none";

export interface ProvinceRisk {
  provinceId: string;   // matches NormalizedProvince.id
  provinceName: string;
  riskLevel: RiskLevel;
  riskScore: number;
  totalIncidents: number;
  criticalIncidents: number;
  highIncidents: number;
  mediumIncidents: number;
  lowIncidents: number;
  unresolvedIncidents: number;
  investigatingIncidents: number;
  estimatedLoss: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Filter state — single source of truth for the entire dashboard
// ─────────────────────────────────────────────────────────────────────────────

export type PeriodFilter = "today" | "7d" | "30d";

export interface FilterState {
  period: PeriodFilter;
  businessUnit: BusinessUnit | "all";
  severity: IncidentSeverity | "all";
  province: string | "all";  // NormalizedProvince.id or "all"
  search: string;
}

export const DEFAULT_FILTER_STATE: FilterState = {
  period: "30d",
  businessUnit: "all",
  severity: "all",
  province: "all",
  search: "",
};

// ─────────────────────────────────────────────────────────────────────────────
// Aggregated KPI summary computed from a filtered incident set
// ─────────────────────────────────────────────────────────────────────────────

export interface IncidentSummary {
  totalIncidents: number;
  criticalIncidents: number;
  investigatingIncidents: number;
  resolvedIncidents: number;
  openIncidents: number;
  estimatedLoss: number;
  avgResponseMinutes: number;
  scope: string;             // "Seluruh Indonesia" or province display name
}
