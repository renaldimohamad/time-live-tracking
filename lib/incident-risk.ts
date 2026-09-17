// ─────────────────────────────────────────────────────────────────────────────
// TIME Live Tracking — Province Risk Calculation
//
// This module is intentionally kept separate from UI code so the algorithm
// can later be replaced by backend-computed risk scores without changing
// any component logic.
//
// Thresholds are prototype/mock calibration values only.
// Replace with official business rules when available.
// ─────────────────────────────────────────────────────────────────────────────

import type { Incident, ProvinceRisk, RiskLevel } from "@/types/incident";

// ─── Severity weights ─────────────────────────────────────────────────────────
// These weights are configurable and should be externalized to a config/API
// when productionizing. They are NOT hardcoded business rules.
const SEVERITY_WEIGHTS: Record<Incident["severity"], number> = {
  critical: 10,
  high: 6,
  medium: 3,
  low: 1,
};

// Bonus score per unresolved (open or investigating) incident
const UNRESOLVED_BONUS = 2;

// ─── Risk thresholds ──────────────────────────────────────────────────────────
// Prototype calibration. Replace with backend-computed classification later.
const RISK_THRESHOLDS = {
  critical: 30,
  high: 16,
  medium: 6,
  low: 1,
} as const;

/**
 * Calculate a normalized risk score for a province based on its incidents.
 *
 * Formula:
 *   baseScore   = Σ(severity_weight × incident_count_per_severity)
 *   unresolvedBonus = unresolved_count × UNRESOLVED_BONUS
 *   concentrationFactor = (critical + high) / total × 10   (0–10 bonus)
 *   riskScore = baseScore + unresolvedBonus + concentrationFactor
 *
 * @param incidents - Incidents belonging to this province (already filtered)
 * @param provinceId - Normalized province ID
 * @param provinceName - Display name
 */
export function calculateProvinceRisk(
  incidents: Incident[],
  provinceId: string,
  provinceName: string
): ProvinceRisk {
  const total = incidents.length;

  if (total === 0) {
    return {
      provinceId,
      provinceName,
      riskLevel: "none",
      riskScore: 0,
      totalIncidents: 0,
      criticalIncidents: 0,
      highIncidents: 0,
      mediumIncidents: 0,
      lowIncidents: 0,
      unresolvedIncidents: 0,
      investigatingIncidents: 0,
      estimatedLoss: 0,
    };
  }

  const criticalCount = incidents.filter((i) => i.severity === "critical").length;
  const highCount = incidents.filter((i) => i.severity === "high").length;
  const mediumCount = incidents.filter((i) => i.severity === "medium").length;
  const lowCount = incidents.filter((i) => i.severity === "low").length;
  const unresolvedCount = incidents.filter(
    (i) => i.status === "open" || i.status === "investigating"
  ).length;
  const investigatingCount = incidents.filter((i) => i.status === "investigating").length;
  const totalLoss = incidents.reduce((sum, i) => sum + i.estimatedLoss, 0);

  // Base score from severity weighting
  const baseScore =
    criticalCount * SEVERITY_WEIGHTS.critical +
    highCount * SEVERITY_WEIGHTS.high +
    mediumCount * SEVERITY_WEIGHTS.medium +
    lowCount * SEVERITY_WEIGHTS.low;

  // Unresolved bonus — rewards urgency
  const unresolvedBonus = unresolvedCount * UNRESOLVED_BONUS;

  // Concentration factor — provinces with proportionally more critical/high
  // incidents are penalized harder regardless of total volume
  const concentrationFactor =
    total > 0 ? ((criticalCount + highCount) / total) * 10 : 0;

  const riskScore = Math.round(baseScore + unresolvedBonus + concentrationFactor);

  return {
    provinceId,
    provinceName,
    riskLevel: scoreToRiskLevel(riskScore),
    riskScore,
    totalIncidents: total,
    criticalIncidents: criticalCount,
    highIncidents: highCount,
    mediumIncidents: mediumCount,
    lowIncidents: lowCount,
    unresolvedIncidents: unresolvedCount,
    investigatingIncidents: investigatingCount,
    estimatedLoss: totalLoss,
  };
}

/**
 * Convert a numeric risk score to a risk level category.
 * Thresholds are prototype values — replace via config when needed.
 */
export function scoreToRiskLevel(score: number): RiskLevel {
  if (score >= RISK_THRESHOLDS.critical) return "critical";
  if (score >= RISK_THRESHOLDS.high) return "high";
  if (score >= RISK_THRESHOLDS.medium) return "medium";
  if (score >= RISK_THRESHOLDS.low) return "low";
  return "none";
}

/**
 * Compute risk for all provinces given the full incident list.
 * Returns a Map keyed by normalized province ID.
 */
export function computeAllProvinceRisks(
  incidents: Incident[],
  provinces: Array<{ id: string; name: string }>
): Map<string, ProvinceRisk> {
  const result = new Map<string, ProvinceRisk>();

  for (const province of provinces) {
    const provinceIncidents = incidents.filter(
      (i) => normalizeProvinceName(i.province) === province.id
    );
    result.set(province.id, calculateProvinceRisk(provinceIncidents, province.id, province.name));
  }

  return result;
}

/**
 * Normalize a province name to a consistent slug for matching.
 * Handles GeoJSON UPPERCASE names and incident data mixed-case names.
 */
export function normalizeProvinceName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Convert a GeoJSON nama_prop (UPPERCASE) to a display name.
 * Applies title-case transformation with Indonesian-specific exceptions.
 */
export function geoNameToDisplayName(namaProvinsi: string): string {
  // Special cases
  const SPECIAL_CASES: Record<string, string> = {
    "DKI JAKARTA": "DKI Jakarta",
    "DAERAH ISTIMEWA YOGYAKARTA": "D.I. Yogyakarta",
    "KEPULAUAN RIAU": "Kepulauan Riau",
    "KEPULAUAN BANGKA BELITUNG": "Bangka Belitung",
    "NUSA TENGGARA BARAT": "Nusa Tenggara Barat",
    "NUSA TENGGARA TIMUR": "Nusa Tenggara Timur",
    "KALIMANTAN BARAT": "Kalimantan Barat",
    "KALIMANTAN TENGAH": "Kalimantan Tengah",
    "KALIMANTAN SELATAN": "Kalimantan Selatan",
    "KALIMANTAN TIMUR": "Kalimantan Timur",
    "KALIMANTAN UTARA": "Kalimantan Utara",
    "SULAWESI UTARA": "Sulawesi Utara",
    "SULAWESI TENGAH": "Sulawesi Tengah",
    "SULAWESI SELATAN": "Sulawesi Selatan",
    "SULAWESI TENGGARA": "Sulawesi Tenggara",
    "SULAWESI BARAT": "Sulawesi Barat",
    "SUMATERA UTARA": "Sumatera Utara",
    "SUMATERA BARAT": "Sumatera Barat",
    "SUMATERA SELATAN": "Sumatera Selatan",
    "MALUKU UTARA": "Maluku Utara",
    "PAPUA BARAT": "Papua Barat",
    "PAPUA SELATAN": "Papua Selatan",
    "PAPUA TENGAH": "Papua Tengah",
    "PAPUA PEGUNUNGAN": "Papua Pegunungan",
    "PAPUA BARAT DAYA": "Papua Barat Daya",
    "P A P U A": "Papua",
  };

  return (
    SPECIAL_CASES[namaProvinsi] ??
    namaProvinsi
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, (c) => c.toUpperCase())
  );
}

/**
 * Build the normalized province list from GeoJSON features.
 */
export function buildProvinceList(
  features: Array<{ properties: { nama_prop: string; no_prop: number } }>
): Array<{ id: string; name: string; rawName: string }> {
  return features.map((f) => {
    const rawName = f.properties.nama_prop;
    const displayName = geoNameToDisplayName(rawName);
    return {
      id: normalizeProvinceName(displayName),
      name: displayName,
      rawName,
    };
  });
}

// ─── Risk color utilities ─────────────────────────────────────────────────────

export const RISK_COLORS: Record<RiskLevel, string> = {
  critical: "#EF4444",
  high: "#F97316",
  medium: "#EAB308",
  low: "#22C55E",
  none: "#94A3B8",
};

export const RISK_FILL_OPACITY: Record<RiskLevel, number> = {
  critical: 0.75,
  high: 0.65,
  medium: 0.55,
  low: 0.45,
  none: 0.15,
};

export const RISK_LABELS: Record<RiskLevel, string> = {
  critical: "Kritis",
  high: "Tinggi",
  medium: "Sedang",
  low: "Rendah",
  none: "Nihil",
};

export const SEVERITY_COLORS: Record<Incident["severity"], string> = {
  critical: "#EF4444",
  high: "#F97316",
  medium: "#EAB308",
  low: "#22C55E",
};

export const SEVERITY_LABELS: Record<Incident["severity"], string> = {
  critical: "Kritis",
  high: "Tinggi",
  medium: "Sedang",
  low: "Rendah",
};
