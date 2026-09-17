// ─────────────────────────────────────────────────────────────────────────────
// TIME Live Tracking — Mock Incident Data
// 148 synthetic operational incidents distributed across Indonesian provinces.
// Coordinates are approximate centers within each province boundary.
// This file will be replaced by API calls in production.
// ─────────────────────────────────────────────────────────────────────────────

import type { Incident } from "@/types/incident";

// Base timestamps relative to "now" for realistic date distribution
const NOW = new Date("2026-09-17T10:57:00+07:00");
const daysAgo = (d: number, h = 0) =>
  new Date(NOW.getTime() - d * 86400000 - h * 3600000).toISOString();

export const MOCK_INCIDENTS: Incident[] = [
  // ── RIAU (38 incidents) ─────────────────────────────────────────────────────
  {
    id: "INC-2026-0964",
    title: "Pencurian TBS 1.2 Ton – Divisi Riau Blok C-12",
    description:
      "Sensor geofence perimeter barat mendeteksi pergerakan kendaraan tidak terdaftar pada pukul 02:14 WIB. Truk L300 berhasil membawa keluar ±1.2 ton TBS sebelum respons petugas lapangan.",
    province: "Riau",
    site: "Kebun Tapai, Kab. Siak",
    businessUnit: "Perkebunan Sawit",
    category: "pencurian",
    severity: "critical",
    status: "investigating",
    latitude: 0.52,
    longitude: 101.98,
    reportedAt: daysAgo(0, 14),
    estimatedLoss: 18500000,
    petugas: "Budi Santoso",
    responseTimeMinutes: 14,
  },
  {
    id: "INC-2026-0958",
    title: "Geofence Breach Perimeter Timur – Kebun Jambi Blok F",
    description:
      "Dua pikap tak dikenal memasuki tapal batas kebun tanpa izin, terdeteksi kamera CCTV Pos 4.",
    province: "Riau",
    site: "Kebun Maro, Kab. Pelalawan",
    businessUnit: "Perkebunan Sawit",
    category: "geofence_breach",
    severity: "critical",
    status: "investigating",
    latitude: 0.34,
    longitude: 102.15,
    reportedAt: daysAgo(1, 6),
    estimatedLoss: 24000000,
    responseTimeMinutes: 8,
  },
  {
    id: "INC-2026-0951",
    title: "Pencurian Kabel Power – Stasiun Pengolahan A",
    description: "Kabel tembaga 80m dicuri dari stasiun pengolahan di luar jam operasional.",
    province: "Riau",
    site: "Stasiun Pengolahan Sei Tapung",
    businessUnit: "Security Kawasan",
    category: "pencurian",
    severity: "high",
    status: "open",
    latitude: 0.61,
    longitude: 101.45,
    reportedAt: daysAgo(2, 3),
    estimatedLoss: 12000000,
    responseTimeMinutes: 22,
  },
  {
    id: "INC-2026-0948",
    title: "Tumpahan Solar 200L – Area Loading Dock",
    description:
      "Selang tangki solar bocor saat pengisian, tumpahan mencapai saluran drainase kebun.",
    province: "Riau",
    site: "Loading Dock Blok B, Kab. Kampar",
    businessUnit: "Perkebunan Sawit",
    category: "tumpahan_b3",
    severity: "high",
    status: "investigating",
    latitude: 0.29,
    longitude: 101.32,
    reportedAt: daysAgo(3, 8),
    estimatedLoss: 8500000,
    responseTimeMinutes: 18,
  },
  {
    id: "INC-2026-0939",
    title: "Kerusakan Conveyor Belt – Unit Pabrik Kelapa Sawit",
    description: "Belt conveyor TBS putus pada shift malam, produksi berhenti 4 jam.",
    province: "Riau",
    site: "PKS Sei Rokan, Kab. Rokan Hulu",
    businessUnit: "Perkebunan Sawit",
    category: "kerusakan_sarana",
    severity: "high",
    status: "resolved",
    latitude: 1.08,
    longitude: 100.43,
    reportedAt: daysAgo(5, 11),
    resolvedAt: daysAgo(5, 3),
    estimatedLoss: 15000000,
    responseTimeMinutes: 11,
  },
  {
    id: "INC-2026-0933",
    title: "Vandalisme Pos Keamanan – Perimeter Selatan",
    description: "Pos keamanan dirusak, CCTV dua titik dinonaktifkan secara paksa.",
    province: "Riau",
    site: "Perimeter Selatan Div. III",
    businessUnit: "Security Kawasan",
    category: "vandalisme",
    severity: "medium",
    status: "resolved",
    latitude: 0.18,
    longitude: 101.72,
    reportedAt: daysAgo(7, 2),
    resolvedAt: daysAgo(6, 18),
    estimatedLoss: 4200000,
    responseTimeMinutes: 33,
  },
  {
    id: "INC-2026-0928",
    title: "K3: Pekerja Terjatuh dari Truk Panen",
    description: "Satu pekerja pemanen TBS terjatuh dari bak truk, mengalami cedera ringan.",
    province: "Riau",
    site: "Afdeling 5, Kab. Indragiri Hulu",
    businessUnit: "Perkebunan Sawit",
    category: "k3_lingkungan",
    severity: "medium",
    status: "resolved",
    latitude: -0.11,
    longitude: 102.28,
    reportedAt: daysAgo(8, 7),
    resolvedAt: daysAgo(8, 5),
    estimatedLoss: 2100000,
    responseTimeMinutes: 25,
  },
  {
    id: "INC-2026-0921",
    title: "Pencurian Peralatan Semprot",
    description: "4 unit sprayer elektrik hilang dari gudang pestisida yang tidak terkunci.",
    province: "Riau",
    site: "Gudang Afdeling 2, Kab. Bengkalis",
    businessUnit: "Perkebunan Sawit",
    category: "pencurian",
    severity: "medium",
    status: "open",
    latitude: 1.45,
    longitude: 102.12,
    reportedAt: daysAgo(9, 9),
    estimatedLoss: 5600000,
    responseTimeMinutes: 41,
  },
  {
    id: "INC-2026-0915",
    title: "Kebocoran Limbah Cair IPAL",
    description: "Kolam IPAL meluap akibat hujan deras, limbah cair mengalir ke parit desa.",
    province: "Riau",
    site: "PKS Kijang Mas, Kab. Kuantan Singingi",
    businessUnit: "Perkebunan Sawit",
    category: "tumpahan_b3",
    severity: "critical",
    status: "investigating",
    latitude: -0.32,
    longitude: 101.47,
    reportedAt: daysAgo(10, 4),
    estimatedLoss: 32000000,
    responseTimeMinutes: 19,
  },
  {
    id: "INC-2026-0909",
    title: "Generator Rusak – Pemadaman Pabrik 6 Jam",
    description: "Generator utama PKS mati mendadak, backup tidak aktif otomatis.",
    province: "Riau",
    site: "PKS Pangkalan Kerinci",
    businessUnit: "Perkebunan Sawit",
    category: "kerusakan_sarana",
    severity: "high",
    status: "resolved",
    latitude: 0.21,
    longitude: 102.67,
    reportedAt: daysAgo(12, 6),
    resolvedAt: daysAgo(11, 22),
    estimatedLoss: 21000000,
    responseTimeMinutes: 16,
  },
  {
    id: "INC-2026-0903",
    title: "Pencurian TBS Modus Truk Palsu",
    description: "Pelaku menggunakan truk dengan stiker perusahaan palsu untuk mengangkut TBS.",
    province: "Riau",
    site: "Gate Utara, Kab. Rokan Hilir",
    businessUnit: "Security Kawasan",
    category: "pencurian",
    severity: "critical",
    status: "resolved",
    latitude: 1.88,
    longitude: 100.82,
    reportedAt: daysAgo(14, 3),
    resolvedAt: daysAgo(13, 14),
    estimatedLoss: 28000000,
    responseTimeMinutes: 9,
  },
  {
    id: "INC-2026-0897",
    title: "Kerusakan Pompa Air Irigasi",
    description: "Pompa submersible irigasi blok A terbakar akibat korsleting.",
    province: "Riau",
    site: "Blok A, Div. I, Kab. Siak",
    businessUnit: "Perkebunan Sawit",
    category: "kerusakan_sarana",
    severity: "medium",
    status: "resolved",
    latitude: 0.62,
    longitude: 102.01,
    reportedAt: daysAgo(16, 7),
    resolvedAt: daysAgo(15, 19),
    estimatedLoss: 7800000,
    responseTimeMinutes: 28,
  },
  {
    id: "INC-2026-0892",
    title: "Akses Tidak Sah – Pos Timbang",
    description: "Kendaraan pribadi memasuki area pos timbang di luar jam operasional.",
    province: "Riau",
    site: "Pos Timbang Blok F",
    businessUnit: "Security Kawasan",
    category: "keamanan_fisik",
    severity: "low",
    status: "resolved",
    latitude: 0.41,
    longitude: 101.85,
    reportedAt: daysAgo(18, 8),
    resolvedAt: daysAgo(18, 7),
    estimatedLoss: 0,
    responseTimeMinutes: 12,
  },
  {
    id: "INC-2026-0888",
    title: "K3: Paparan Pestisida Pekerja",
    description: "Dua pekerja semprot terpapar pestisida tanpa APD lengkap, dibawa ke klinik.",
    province: "Riau",
    site: "Afdeling 7, Kab. Pelalawan",
    businessUnit: "Perkebunan Sawit",
    category: "k3_lingkungan",
    severity: "high",
    status: "resolved",
    latitude: 0.28,
    longitude: 102.34,
    reportedAt: daysAgo(19, 9),
    resolvedAt: daysAgo(19, 6),
    estimatedLoss: 3400000,
    responseTimeMinutes: 21,
  },
  {
    id: "INC-2026-0882",
    title: "Sabotase Pipa Air Bersih",
    description: "Pipa distribusi air bersih ke camp pekerja dirusak secara sengaja.",
    province: "Riau",
    site: "Camp Pekerja Div. IV",
    businessUnit: "Security Kawasan",
    category: "vandalisme",
    severity: "medium",
    status: "resolved",
    latitude: 0.74,
    longitude: 101.61,
    reportedAt: daysAgo(21, 4),
    resolvedAt: daysAgo(20, 16),
    estimatedLoss: 2800000,
    responseTimeMinutes: 38,
  },
  // 23 more Riau incidents (abbreviated for brevity in data)
  ...generateRiauIncidents(),

  // ── DKI JAKARTA (22 incidents) ──────────────────────────────────────────────
  {
    id: "INC-2026-0982",
    title: "Disrupsi Sinyal Interlock – LRT Stasiun Dukuh Atas",
    description:
      "Relay interlocking gagal merespons telemetry otomatis, sistem dihentikan manual oleh teknisi.",
    province: "DKI Jakarta",
    site: "Stasiun Dukuh Atas Platform 2",
    businessUnit: "LRT & Transportasi Rel",
    category: "disruption_teknis",
    severity: "critical",
    status: "investigating",
    latitude: -6.2018,
    longitude: 106.8231,
    reportedAt: daysAgo(0, 9),
    estimatedLoss: 45000000,
    responseTimeMinutes: 9,
  },
  {
    id: "INC-2026-0971",
    title: "Pelanggaran Akses Data Center – Wisma Antara Lt 14",
    description:
      "Vendor asing mencoba memasuki server vault tanpa izin, terdeteksi sistem biometrik.",
    province: "DKI Jakarta",
    site: "Wisma Antara Lt 14 DC 01",
    businessUnit: "Security Kawasan",
    category: "keamanan_fisik",
    severity: "high",
    status: "investigating",
    latitude: -6.1786,
    longitude: 106.8314,
    reportedAt: daysAgo(0, 4),
    estimatedLoss: 15000000,
    responseTimeMinutes: 4,
  },
  {
    id: "INC-2026-0979",
    title: "Barrier Gate Dilarang – Mall Grand Metropolitan",
    description: "Pengendara SUV menabrak barrier gate dengan sengaja di area transit.",
    province: "DKI Jakarta",
    site: "Kawasan Parkir Grand Metropolitan",
    businessUnit: "Manajemen Parkir",
    category: "kerusakan_sarana",
    severity: "medium",
    status: "resolved",
    latitude: -6.2367,
    longitude: 106.8842,
    reportedAt: daysAgo(1, 22),
    resolvedAt: daysAgo(1, 19),
    estimatedLoss: 4200000,
    responseTimeMinutes: 22,
  },
  {
    id: "INC-2026-0975",
    title: "Tumpahan Degreaser B3 – Bandara SHIA Terminal 3",
    description:
      "Jerigen konsentrat pembersih mesin bocor di area transit kargo, B3 teridentifikasi.",
    province: "DKI Jakarta",
    site: "Area Apron Barat SHIA T3",
    businessUnit: "Cleaning Services",
    category: "tumpahan_b3",
    severity: "medium",
    status: "resolved",
    latitude: -6.1255,
    longitude: 106.6552,
    reportedAt: daysAgo(2, 11),
    resolvedAt: daysAgo(2, 7),
    estimatedLoss: 6500000,
    responseTimeMinutes: 11,
  },
  ...generateJakartaIncidents(),

  // ── JAWA BARAT (18 incidents) ───────────────────────────────────────────────
  {
    id: "INC-2026-0944",
    title: "Korsleting Kabel – Depo Gardu Traksi Harpumakti",
    description:
      "Aroma kabel terbakar terdeteksi fire alarm panel sub-stasiun, tim pemadam dikerahkan.",
    province: "Jawa Barat",
    site: "Depo Gardu Traksi Harpumakti",
    businessUnit: "LRT & Transportasi Rel",
    category: "kebakaran",
    severity: "high",
    status: "resolved",
    latitude: -6.9147,
    longitude: 107.5898,
    reportedAt: daysAgo(2, 5),
    resolvedAt: daysAgo(2, 2),
    estimatedLoss: 22000000,
    responseTimeMinutes: 5,
  },
  {
    id: "INC-2026-0937",
    title: "Vandalisme Area Parkir – Summarecon Bekasi",
    description: "Grafiti pada 14 kendaraan terparkir, kamera area C tidak merekam.",
    province: "Jawa Barat",
    site: "Parkir Summarecon Mal Bekasi",
    businessUnit: "Manajemen Parkir",
    category: "vandalisme",
    severity: "medium",
    status: "investigating",
    latitude: -6.2439,
    longitude: 106.9947,
    reportedAt: daysAgo(4, 3),
    estimatedLoss: 8700000,
    responseTimeMinutes: 31,
  },
  ...generateJawaBaratIncidents(),

  // ── KALIMANTAN TIMUR (15 incidents) ─────────────────────────────────────────
  {
    id: "INC-2026-0961",
    title: "Pencurian CPO – Gudang Penampungan Sangatta",
    description: "Pompa transfer CPO dioperasikan ilegal, ±800L CPO dipindah ke tanker gelap.",
    province: "Kalimantan Timur",
    site: "Gudang CPO Sangatta, Kutai Timur",
    businessUnit: "Perkebunan Sawit",
    category: "pencurian",
    severity: "critical",
    status: "investigating",
    latitude: 0.98,
    longitude: 117.57,
    reportedAt: daysAgo(0, 11),
    estimatedLoss: 41000000,
    responseTimeMinutes: 17,
  },
  ...generateKaltimIncidents(),

  // ── SUMATERA UTARA (12 incidents) ───────────────────────────────────────────
  {
    id: "INC-2026-0986",
    title: "Kebakaran Lahan – Kebun Dolok Sanggul",
    description:
      "Api merambat dari lahan kosong ke areal kebun, 3 hektar terdampak sebelum dipadamkan.",
    province: "Sumatera Utara",
    site: "Kebun Dolok Sanggul, Humbang Hasundutan",
    businessUnit: "Perkebunan Sawit",
    category: "kebakaran",
    severity: "critical",
    status: "resolved",
    latitude: 2.38,
    longitude: 98.71,
    reportedAt: daysAgo(1, 8),
    resolvedAt: daysAgo(1, 2),
    estimatedLoss: 55000000,
    responseTimeMinutes: 23,
  },
  ...generateSumutIncidents(),

  // ── JAWA TIMUR (10 incidents) ───────────────────────────────────────────────
  {
    id: "INC-2026-0953",
    title: "Gangguan Rel – Jalur Surabaya-Sidoarjo KM 14",
    description: "Rel mengalami deformasi termal akibat gelombang panas, layanan ditangguhkan.",
    province: "Jawa Timur",
    site: "KM 14, Jalur SBI-SDO",
    businessUnit: "LRT & Transportasi Rel",
    category: "kerusakan_sarana",
    severity: "high",
    status: "resolved",
    latitude: -7.4562,
    longitude: 112.6518,
    reportedAt: daysAgo(3, 7),
    resolvedAt: daysAgo(2, 20),
    estimatedLoss: 18000000,
    responseTimeMinutes: 13,
  },
  ...generateJatimIncidents(),

  // ── SUMATERA SELATAN (8 incidents) ──────────────────────────────────────────
  ...generateSumselIncidents(),

  // ── JAWA TENGAH (6 incidents) ────────────────────────────────────────────────
  ...generateJatengIncidents(),

  // ── BANTEN (4 incidents) ────────────────────────────────────────────────────
  ...generateBantenIncidents(),

  // ── KALIMANTAN BARAT (4 incidents) ──────────────────────────────────────────
  ...generateKalbarIncidents(),

  // ── SULAWESI SELATAN (3 incidents) ──────────────────────────────────────────
  ...generateSulselIncidents(),

  // ── KALIMANTAN SELATAN (2 incidents) ────────────────────────────────────────
  ...generateKalselIncidents(),

  // ── LAMPUNG (2 incidents) ───────────────────────────────────────────────────
  ...generateLampungIncidents(),

  // ── ACEH (2 incidents) ──────────────────────────────────────────────────────
  ...generateAcehIncidents(),
];

// ─────────────────────────────────────────────────────────────────────────────
// Generator helpers — produce realistic synthetic incidents per province
// ─────────────────────────────────────────────────────────────────────────────

function makeId(n: number) {
  return `INC-2026-${String(n).padStart(4, "0")}`;
}

function generateRiauIncidents(): Incident[] {
  const base: Partial<Incident>[] = [
    { title: "Kebocoran Pupuk Cair – Gudang Agrokimia", category: "tumpahan_b3", severity: "medium", status: "resolved", site: "Gudang Agrokimia Blok C", latitude: 0.29, longitude: 101.71, estimatedLoss: 3200000 },
    { title: "Pencurian Buah Kelapa Sawit – Malam", category: "pencurian", severity: "medium", status: "open", site: "Afdeling 9, Kab. Kampar", latitude: 0.35, longitude: 101.18, estimatedLoss: 4500000 },
    { title: "Kerusakan Mesin Thresher PKS", category: "kerusakan_sarana", severity: "high", status: "resolved", site: "PKS Sei Pagar", latitude: 0.48, longitude: 101.38, estimatedLoss: 9800000 },
    { title: "Intrusi Perahu di Perairan Kebun", category: "keamanan_fisik", severity: "medium", status: "resolved", site: "Tepian Sungai Kampar", latitude: 0.22, longitude: 101.02, estimatedLoss: 1200000 },
    { title: "K3: Kecelakaan Alat Berat Grader", category: "k3_lingkungan", severity: "critical", status: "investigating", site: "Blok D Jalan Produksi", latitude: 0.67, longitude: 101.55, estimatedLoss: 35000000 },
    { title: "Gangguan Listrik PLN – Proses Sterilisasi Terhenti", category: "disruption_teknis", severity: "medium", status: "resolved", site: "PKS Rokan", latitude: 1.02, longitude: 100.98, estimatedLoss: 6700000 },
    { title: "Pencurian Minyak Diesel Tangki", category: "pencurian", severity: "high", status: "open", site: "Tangki Solar Div. II", latitude: 0.81, longitude: 101.44, estimatedLoss: 11000000 },
    { title: "K3: Terjatuh di Tangga Pabrik", category: "k3_lingkungan", severity: "low", status: "resolved", site: "Lantai 2 PKS Terantam", latitude: 0.44, longitude: 101.62, estimatedLoss: 800000 },
    { title: "Vandalisme Pagar Perimeter", category: "vandalisme", severity: "low", status: "resolved", site: "Pagar Barat Afdeling 3", latitude: 0.31, longitude: 101.88, estimatedLoss: 1500000 },
    { title: "Gangguan Sistem Telemetri GPS", category: "disruption_teknis", severity: "medium", status: "open", site: "Fleet Monitoring Center Riau", latitude: 0.29, longitude: 101.71, estimatedLoss: 2300000 },
    { title: "Pencurian Mesin Pompa Portable", category: "pencurian", severity: "medium", status: "resolved", site: "Gudang Sarana Kab. Pelalawan", latitude: 0.24, longitude: 102.11, estimatedLoss: 7200000 },
    { title: "Kerusakan Jembatan Akses Kebun", category: "kerusakan_sarana", severity: "medium", status: "resolved", site: "Jembatan KM 12 Afdeling 4", latitude: 0.19, longitude: 102.38, estimatedLoss: 14000000 },
    { title: "K3: Paparan Asap Boiler", category: "k3_lingkungan", severity: "medium", status: "resolved", site: "Ruang Boiler PKS Langgam", latitude: 0.51, longitude: 102.55, estimatedLoss: 1800000 },
    { title: "Pencurian Biji Sawit di Pos Timbang", category: "pencurian", severity: "low", status: "resolved", site: "Pos Timbang Gate 3", latitude: 0.38, longitude: 101.75, estimatedLoss: 2100000 },
    { title: "Kegagalan Sensor Pengukur TBS", category: "disruption_teknis", severity: "low", status: "resolved", site: "Pos Timbang Sei Rokan", latitude: 1.11, longitude: 100.51, estimatedLoss: 1100000 },
    { title: "Pencemaran Sungai Akibat Spillage", category: "tumpahan_b3", severity: "high", status: "investigating", site: "Tepi Sungai Siak, Kab. Siak", latitude: 0.73, longitude: 102.13, estimatedLoss: 26000000 },
    { title: "Pencurian Panel Surya", category: "pencurian", severity: "medium", status: "open", site: "Kantor Afdeling 6", latitude: 0.55, longitude: 101.92, estimatedLoss: 8900000 },
    { title: "Akses Tidak Sah – Area Produksi Malam", category: "keamanan_fisik", severity: "low", status: "resolved", site: "Area Produksi PKS Dalu-Dalu", latitude: 1.28, longitude: 100.33, estimatedLoss: 0 },
    { title: "Kerusakan Kendaraan Operasional", category: "kerusakan_sarana", severity: "low", status: "resolved", site: "Jalan Produksi Blok A", latitude: 0.41, longitude: 101.55, estimatedLoss: 3400000 },
    { title: "Kebakaran Gudang Penyimpanan", category: "kebakaran", severity: "critical", status: "resolved", site: "Gudang C Div. III Kab. Kampar", latitude: 0.29, longitude: 101.18, estimatedLoss: 48000000 },
    { title: "K3: Terjepit Mesin Press", category: "k3_lingkungan", severity: "high", status: "resolved", site: "Ruang Press PKS Tapung", latitude: 0.62, longitude: 101.35, estimatedLoss: 5200000 },
    { title: "Pencurian Suku Cadang Mesin", category: "pencurian", severity: "medium", status: "open", site: "Workshop Mesin Div. I", latitude: 0.47, longitude: 101.58, estimatedLoss: 6300000 },
    { title: "Gangguan SCADA Sistem Pemantauan", category: "disruption_teknis", severity: "medium", status: "investigating", site: "Control Room PKS Sei Garo", latitude: 0.33, longitude: 101.84, estimatedLoss: 4100000 },
  ];
  return base.map((b, i) => ({
    id: makeId(800 + i),
    title: b.title!,
    description: `Insiden operasional ${b.category?.replace(/_/g, " ")} terdeteksi di lokasi ${b.site}.`,
    province: "Riau",
    site: b.site!,
    businessUnit: b.businessUnit ?? "Perkebunan Sawit",
    category: b.category!,
    severity: b.severity!,
    status: b.status!,
    latitude: b.latitude!,
    longitude: b.longitude!,
    reportedAt: daysAgo(Math.floor(i * 0.8) + 2, (i * 3) % 24),
    resolvedAt: b.status === "resolved" ? daysAgo(Math.floor(i * 0.8) + 1, 8) : undefined,
    estimatedLoss: b.estimatedLoss!,
    responseTimeMinutes: 10 + (i % 30),
  } as Incident));
}

function generateJakartaIncidents(): Incident[] {
  const base: Partial<Incident>[] = [
    { title: "Gangguan Pintu Otomatis Stasiun Manggarai", category: "disruption_teknis", severity: "medium", status: "resolved", site: "Stasiun Manggarai Gate B", latitude: -6.2107, longitude: 106.8518, estimatedLoss: 3800000, businessUnit: "LRT & Transportasi Rel" },
    { title: "Pencurian Peralatan Cleaning – Monas Area", category: "pencurian", severity: "medium", status: "resolved", site: "Kawasan Monas Zona Utara", latitude: -6.1750, longitude: 106.8272, estimatedLoss: 5100000, businessUnit: "Cleaning Services" },
    { title: "Korsleting Panel Listrik Parkir SCBD", category: "kebakaran", severity: "high", status: "resolved", site: "Parkir SCBD Lot 3 Lantai B2", latitude: -6.2241, longitude: 106.8090, estimatedLoss: 17000000, businessUnit: "Manajemen Parkir" },
    { title: "Tumpahan Cairan Pembersih Lantai", category: "tumpahan_b3", severity: "low", status: "resolved", site: "Gedung Bursa Efek Indonesia", latitude: -6.2222, longitude: 106.8089, estimatedLoss: 1200000, businessUnit: "Cleaning Services" },
    { title: "Kerusakan Eskalator Stasiun Dukuh Atas", category: "kerusakan_sarana", severity: "medium", status: "resolved", site: "Stasiun Dukuh Atas", latitude: -6.2018, longitude: 106.8231, estimatedLoss: 8400000, businessUnit: "LRT & Transportasi Rel" },
    { title: "Akses Tidak Sah Data Center Sudirman", category: "keamanan_fisik", severity: "high", status: "resolved", site: "Data Center Sudirman Lt 8", latitude: -6.2098, longitude: 106.8219, estimatedLoss: 0, businessUnit: "Security Kawasan" },
    { title: "Kerusakan Ticket Vending Machine", category: "kerusakan_sarana", severity: "low", status: "resolved", site: "Stasiun Juanda", latitude: -6.1631, longitude: 106.8268, estimatedLoss: 4200000, businessUnit: "LRT & Transportasi Rel" },
    { title: "K3: Petugas Terpeleset Area Basah", category: "k3_lingkungan", severity: "low", status: "resolved", site: "Koridor Stasiun Tanah Abang", latitude: -6.1870, longitude: 106.8127, estimatedLoss: 950000, businessUnit: "Cleaning Services" },
    { title: "Pencurian Kendaraan Parkir – PIK", category: "pencurian", severity: "high", status: "investigating", site: "Pantai Indah Kapuk Mall B2", latitude: -6.1062, longitude: 106.7438, estimatedLoss: 280000000, businessUnit: "Manajemen Parkir" },
    { title: "Vandalisme Tempat Sampah Terpilah", category: "vandalisme", severity: "low", status: "resolved", site: "Kawasan Kota Tua", latitude: -6.1374, longitude: 106.8136, estimatedLoss: 2200000, businessUnit: "Cleaning Services" },
    { title: "Gangguan Sistem Tiket Real-time", category: "disruption_teknis", severity: "high", status: "resolved", site: "Server Room LRT Center Halim", latitude: -6.2661, longitude: 106.8837, estimatedLoss: 22000000, businessUnit: "LRT & Transportasi Rel" },
    { title: "Keamanan: Demonstrasi Tidak Terduga", category: "keamanan_fisik", severity: "medium", status: "resolved", site: "Area Parkir Gedung DPR/MPR", latitude: -6.2097, longitude: 106.8024, estimatedLoss: 4500000, businessUnit: "Security Kawasan" },
    { title: "Kerusakan Kamera CCTV Parkir", category: "kerusakan_sarana", severity: "medium", status: "open", site: "Gedung Wisma BNI 46", latitude: -6.2125, longitude: 106.8213, estimatedLoss: 6300000, businessUnit: "Manajemen Parkir" },
    { title: "Tumpahan Minyak Forklift", category: "tumpahan_b3", severity: "medium", status: "resolved", site: "Gudang Logistik Tanjung Priok", latitude: -6.1072, longitude: 106.8836, estimatedLoss: 3100000, businessUnit: "Cleaning Services" },
    { title: "Pencurian ATM Lobby Gedung", category: "pencurian", severity: "critical", status: "investigating", site: "Lobby Graha CIMB Niaga", latitude: -6.2233, longitude: 106.8092, estimatedLoss: 450000000, businessUnit: "Security Kawasan" },
    { title: "K3: Terjepit Pintu Otomatis", category: "k3_lingkungan", severity: "medium", status: "resolved", site: "Pintu Otomatis Stasiun Gambir", latitude: -6.1765, longitude: 106.8308, estimatedLoss: 2100000, businessUnit: "LRT & Transportasi Rel" },
    { title: "Kebakaran Kecil Ruang Server Cadangan", category: "kebakaran", severity: "high", status: "resolved", site: "Server Room B2 Gedung Arthaloka", latitude: -6.2044, longitude: 106.8197, estimatedLoss: 38000000, businessUnit: "Security Kawasan" },
    { title: "Gangguan Sistem Parkir Otomatis", category: "disruption_teknis", severity: "medium", status: "resolved", site: "Parkir Otomatis Sudirman Tower", latitude: -6.2134, longitude: 106.8207, estimatedLoss: 5400000, businessUnit: "Manajemen Parkir" },
  ];
  return base.map((b, i) => ({
    id: makeId(700 + i),
    title: b.title!,
    description: `Insiden operasional ${b.category?.replace(/_/g, " ")} terdeteksi di ${b.site}.`,
    province: "DKI Jakarta",
    site: b.site!,
    businessUnit: b.businessUnit ?? "Security Kawasan",
    category: b.category!,
    severity: b.severity!,
    status: b.status!,
    latitude: b.latitude!,
    longitude: b.longitude!,
    reportedAt: daysAgo(Math.floor(i * 1.2) + 1, (i * 5) % 24),
    resolvedAt: b.status === "resolved" ? daysAgo(Math.floor(i * 1.2), 10) : undefined,
    estimatedLoss: b.estimatedLoss!,
    responseTimeMinutes: 4 + (i % 20),
  } as Incident));
}

function generateJawaBaratIncidents(): Incident[] {
  const base: Partial<Incident>[] = [
    { title: "K3: Pekerja Terluka Mesin Bubut", category: "k3_lingkungan", severity: "high", status: "resolved", site: "Workshop Depo LRT Bekasi", latitude: -6.2439, longitude: 106.9947, estimatedLoss: 4800000, businessUnit: "LRT & Transportasi Rel" },
    { title: "Pencurian Perlengkapan Cleaning", category: "pencurian", severity: "low", status: "resolved", site: "Gudang Cleaning Karawang", latitude: -6.3219, longitude: 107.3384, estimatedLoss: 2100000, businessUnit: "Cleaning Services" },
    { title: "Kebocoran Atap Gedung Parkir", category: "kerusakan_sarana", severity: "low", status: "resolved", site: "Gedung Parkir Harapan Indah", latitude: -6.2081, longitude: 107.0171, estimatedLoss: 5700000, businessUnit: "Manajemen Parkir" },
    { title: "Pencurian Kendaraan Premium", category: "pencurian", severity: "high", status: "investigating", site: "Aeon Mall BSD Parkir B3", latitude: -6.3019, longitude: 106.6633, estimatedLoss: 320000000, businessUnit: "Manajemen Parkir" },
    { title: "Gangguan Listrik – Rel LRT Jabodebek", category: "disruption_teknis", severity: "high", status: "resolved", site: "Substation LRT Km 9 Cawang", latitude: -6.2563, longitude: 106.8643, estimatedLoss: 31000000, businessUnit: "LRT & Transportasi Rel" },
    { title: "Kerusakan Palang Pintu Otomatis", category: "kerusakan_sarana", severity: "medium", status: "resolved", site: "Exit Gate Mal Trans Studio", latitude: -6.8761, longitude: 107.6127, estimatedLoss: 7200000, businessUnit: "Manajemen Parkir" },
    { title: "Tumpahan B3 – Laboratorium Cibinong", category: "tumpahan_b3", severity: "medium", status: "resolved", site: "Lab Cibinong Science Center", latitude: -6.4716, longitude: 106.8486, estimatedLoss: 4500000, businessUnit: "Cleaning Services" },
    { title: "Pencurian Sepeda Motor", category: "pencurian", severity: "medium", status: "open", site: "Parkir Hypermart Cileungsi", latitude: -6.4129, longitude: 107.0362, estimatedLoss: 18000000, businessUnit: "Manajemen Parkir" },
    { title: "K3: Jatuh dari Ketinggian", category: "k3_lingkungan", severity: "critical", status: "resolved", site: "Fasad Gedung Parkir Supermall Karawaci", latitude: -6.2432, longitude: 106.6351, estimatedLoss: 12000000, businessUnit: "Manajemen Parkir" },
    { title: "Akses Tidak Sah Area Depo", category: "keamanan_fisik", severity: "medium", status: "resolved", site: "Depo LRT Jatimulya Bekasi", latitude: -6.2891, longitude: 107.0321, estimatedLoss: 0, businessUnit: "Security Kawasan" },
    { title: "Kebakaran Kecil Ruang Panel", category: "kebakaran", severity: "high", status: "resolved", site: "Panel Room Depo Bekasi Timur", latitude: -6.2912, longitude: 107.0156, estimatedLoss: 19000000, businessUnit: "LRT & Transportasi Rel" },
    { title: "Kerusakan Kamera Pemantau Rel", category: "kerusakan_sarana", severity: "low", status: "resolved", site: "KM 22 Rel LRT Jabodebek", latitude: -6.3212, longitude: 107.0432, estimatedLoss: 3300000, businessUnit: "LRT & Transportasi Rel" },
    { title: "Tumpahan Pelumas Forklift Gudang", category: "tumpahan_b3", severity: "low", status: "resolved", site: "Gudang Logistik Cikarang", latitude: -6.2756, longitude: 107.1433, estimatedLoss: 1700000, businessUnit: "Cleaning Services" },
    { title: "Pencurian Baterai UPS Server", category: "pencurian", severity: "medium", status: "investigating", site: "Server Room Gedung Cibubur Trade", latitude: -6.3867, longitude: 106.8766, estimatedLoss: 14500000, businessUnit: "Security Kawasan" },
    { title: "Gangguan Platform Sensor Penumpang", category: "disruption_teknis", severity: "low", status: "resolved", site: "Stasiun LRT Duren Barat", latitude: -6.3112, longitude: 107.0143, estimatedLoss: 2400000, businessUnit: "LRT & Transportasi Rel" },
    { title: "Vandalisme Rambu Parkir", category: "vandalisme", severity: "low", status: "resolved", site: "Area Parkir Timur IKEA Alam Sutera", latitude: -6.2218, longitude: 106.6644, estimatedLoss: 900000, businessUnit: "Manajemen Parkir" },
  ];
  return base.map((b, i) => ({
    id: makeId(600 + i),
    title: b.title!,
    description: `Insiden operasional ${b.category?.replace(/_/g, " ")} terdeteksi di ${b.site}.`,
    province: "Jawa Barat",
    site: b.site!,
    businessUnit: b.businessUnit ?? "Manajemen Parkir",
    category: b.category!,
    severity: b.severity!,
    status: b.status!,
    latitude: b.latitude!,
    longitude: b.longitude!,
    reportedAt: daysAgo(Math.floor(i * 1.5) + 1, (i * 4) % 24),
    resolvedAt: b.status === "resolved" ? daysAgo(Math.floor(i * 1.5), 12) : undefined,
    estimatedLoss: b.estimatedLoss!,
    responseTimeMinutes: 5 + (i % 35),
  } as Incident));
}

function generateKaltimIncidents(): Incident[] {
  const base: Partial<Incident>[] = [
    { title: "Pencurian TBS Malam – Blok Kutai Barat", category: "pencurian", severity: "high", status: "open", site: "Blok KB-7 Kutai Barat", latitude: 0.52, longitude: 116.49, estimatedLoss: 17000000 },
    { title: "K3: Terpapar Gas Metana PKS", category: "k3_lingkungan", severity: "critical", status: "investigating", site: "IPAL PKS Sangatta", latitude: 0.94, longitude: 117.52, estimatedLoss: 8500000 },
    { title: "Kerusakan Tongkang CPO", category: "kerusakan_sarana", severity: "high", status: "resolved", site: "Dermaga CPO Bontang", latitude: 0.138, longitude: 117.5, estimatedLoss: 42000000 },
    { title: "Geofence Breach Perimeter Utara", category: "geofence_breach", severity: "medium", status: "resolved", site: "Perimeter Utara Div. V Kaltim", latitude: 1.14, longitude: 117.22, estimatedLoss: 3100000 },
    { title: "Kebakaran Lahan Tepi Kebun", category: "kebakaran", severity: "high", status: "resolved", site: "Batas Selatan Kebun Muara Wahau", latitude: 0.71, longitude: 116.85, estimatedLoss: 28000000 },
    { title: "Vandalisme Menara CCTV", category: "vandalisme", severity: "medium", status: "resolved", site: "Menara CCTV Pos 9", latitude: 0.67, longitude: 117.01, estimatedLoss: 4700000 },
    { title: "Tumpahan Oli Mesin – Area Workshed", category: "tumpahan_b3", severity: "medium", status: "resolved", site: "Workshed Mesin Div. II", latitude: 0.43, longitude: 116.71, estimatedLoss: 2200000 },
    { title: "Pencurian Pupuk NPK 5 Ton", category: "pencurian", severity: "medium", status: "investigating", site: "Gudang Pupuk Kab. Kutai Kartanegara", latitude: 0.48, longitude: 116.97, estimatedLoss: 9500000 },
    { title: "Gangguan Komunikasi HT Lapangan", category: "disruption_teknis", severity: "low", status: "resolved", site: "Pos Relay Div. III", latitude: 0.58, longitude: 117.14, estimatedLoss: 1500000 },
    { title: "K3: Kecelakaan Alat Semprot", category: "k3_lingkungan", severity: "medium", status: "resolved", site: "Afdeling 3 Kab. Berau", latitude: 1.79, longitude: 117.43, estimatedLoss: 3200000 },
    { title: "Kerusakan Jalan Produksi Akibat Banjir", category: "kerusakan_sarana", severity: "medium", status: "resolved", site: "Jalan Produksi KM 8 Div. I", latitude: 0.38, longitude: 116.64, estimatedLoss: 18500000 },
    { title: "Pencurian Mesin Las Workshop", category: "pencurian", severity: "medium", status: "open", site: "Workshop Mesin Div. IV", latitude: 0.61, longitude: 117.36, estimatedLoss: 6800000 },
    { title: "Gangguan SCADA Monitoring", category: "disruption_teknis", severity: "medium", status: "investigating", site: "Control Room PKS Wahau", latitude: 0.82, longitude: 116.92, estimatedLoss: 4800000 },
    { title: "Akses Tidak Sah Malam Hari", category: "keamanan_fisik", severity: "low", status: "resolved", site: "Gate Timur Kebun Besar", latitude: 0.55, longitude: 116.81, estimatedLoss: 0 },
  ];
  return base.map((b, i) => ({
    id: makeId(500 + i),
    title: b.title!,
    description: `Insiden operasional terdeteksi di ${b.site}.`,
    province: "Kalimantan Timur",
    site: b.site!,
    businessUnit: "Perkebunan Sawit",
    category: b.category!,
    severity: b.severity!,
    status: b.status!,
    latitude: b.latitude!,
    longitude: b.longitude!,
    reportedAt: daysAgo(Math.floor(i * 2) + 1, (i * 6) % 24),
    resolvedAt: b.status === "resolved" ? daysAgo(Math.floor(i * 2), 14) : undefined,
    estimatedLoss: b.estimatedLoss!,
    responseTimeMinutes: 15 + (i % 45),
  } as Incident));
}

function generateSumutIncidents(): Incident[] {
  const base: Partial<Incident>[] = [
    { title: "Pencurian TBS – Kebun Asahan", category: "pencurian", severity: "high", status: "open", site: "Kebun Asahan, Kab. Asahan", latitude: 2.65, longitude: 99.66, estimatedLoss: 16000000 },
    { title: "K3: Terluka Mesin Rebusan", category: "k3_lingkungan", severity: "high", status: "resolved", site: "PKS Rantau Prapat", latitude: 2.1, longitude: 99.83, estimatedLoss: 7200000 },
    { title: "Kerusakan Jembatan Akses Kebun", category: "kerusakan_sarana", severity: "high", status: "resolved", site: "Jembatan Batang Toru Div. II", latitude: 1.67, longitude: 99.05, estimatedLoss: 31000000 },
    { title: "Tumpahan Solar Tangki Penyimpanan", category: "tumpahan_b3", severity: "medium", status: "resolved", site: "Tangki Solar PKS Sei Mangkei", latitude: 2.98, longitude: 99.21, estimatedLoss: 5900000 },
    { title: "Geofence Breach – Kebun Labuhan Batu", category: "geofence_breach", severity: "medium", status: "investigating", site: "Perimeter Timur Kab. Labuhan Batu", latitude: 2.18, longitude: 100.11, estimatedLoss: 3400000 },
    { title: "Gangguan Generator PKS Malam", category: "disruption_teknis", severity: "medium", status: "resolved", site: "PKS Sei Babalan", latitude: 3.44, longitude: 98.57, estimatedLoss: 8100000 },
    { title: "Pencurian Pupuk – Gudang Central", category: "pencurian", severity: "medium", status: "resolved", site: "Gudang Pupuk Padang Sidempuan", latitude: 1.38, longitude: 99.27, estimatedLoss: 7500000 },
    { title: "Kebakaran Gudang Hasil Panen", category: "kebakaran", severity: "critical", status: "resolved", site: "Gudang TBS Kab. Deli Serdang", latitude: 3.54, longitude: 98.62, estimatedLoss: 62000000 },
    { title: "K3: Paparan Pestisida", category: "k3_lingkungan", severity: "medium", status: "resolved", site: "Afdeling 8, Kab. Simalungun", latitude: 2.82, longitude: 99.21, estimatedLoss: 2800000 },
    { title: "Kerusakan Mesin Sterilisasi", category: "kerusakan_sarana", severity: "high", status: "resolved", site: "PKS Aek Nabara", latitude: 2.19, longitude: 99.62, estimatedLoss: 14500000 },
    { title: "Vandalisme Papan Reklame Kebun", category: "vandalisme", severity: "low", status: "resolved", site: "Gerbang Kebun Tanjung Morawa", latitude: 3.51, longitude: 98.77, estimatedLoss: 1200000 },
  ];
  return base.map((b, i) => ({
    id: makeId(400 + i),
    title: b.title!,
    description: `Insiden operasional terdeteksi di ${b.site}.`,
    province: "Sumatera Utara",
    site: b.site!,
    businessUnit: "Perkebunan Sawit",
    category: b.category!,
    severity: b.severity!,
    status: b.status!,
    latitude: b.latitude!,
    longitude: b.longitude!,
    reportedAt: daysAgo(Math.floor(i * 2.5) + 1, (i * 7) % 24),
    resolvedAt: b.status === "resolved" ? daysAgo(Math.floor(i * 2.5), 16) : undefined,
    estimatedLoss: b.estimatedLoss!,
    responseTimeMinutes: 20 + (i % 50),
  } as Incident));
}

function generateJatimIncidents(): Incident[] {
  return [
    { id: makeId(350), title: "Kebakaran Panel Listrik – Stasiun Sidoarjo", description: "Panel hubung singkat menimbulkan percikan api.", province: "Jawa Timur", site: "Stasiun Sidoarjo Platform 1", businessUnit: "LRT & Transportasi Rel", category: "kebakaran", severity: "high", status: "resolved", latitude: -7.4478, longitude: 112.7181, reportedAt: daysAgo(5, 9), resolvedAt: daysAgo(5, 6), estimatedLoss: 24000000, responseTimeMinutes: 6 },
    { id: makeId(351), title: "Pencurian Kendaraan Parkir Surabaya", description: "Mobil hilang dari area basement tanpa tanda paksa.", province: "Jawa Timur", site: "Parkir Pakuwon Supermall Surabaya", businessUnit: "Manajemen Parkir", category: "pencurian", severity: "high", status: "investigating", latitude: -7.2927, longitude: 112.6618, reportedAt: daysAgo(3, 14), estimatedLoss: 250000000, responseTimeMinutes: 19 },
    { id: makeId(352), title: "K3: Jatuh Petugas Cleaning Lantai Basah", description: "Petugas terpeleset saat mengepel koridor gedung.", province: "Jawa Timur", site: "Koridor Lantai 7 Gedung Graha Pena", businessUnit: "Cleaning Services", category: "k3_lingkungan", severity: "medium", status: "resolved", latitude: -7.2648, longitude: 112.7408, reportedAt: daysAgo(8, 11), resolvedAt: daysAgo(8, 9), estimatedLoss: 1800000, responseTimeMinutes: 14 },
    { id: makeId(353), title: "Kerusakan Mesin Tiket Otomatis", description: "3 unit vending machine tidak berfungsi akibat lonjakan listrik.", province: "Jawa Timur", site: "Stasiun Surabaya Gubeng", businessUnit: "LRT & Transportasi Rel", category: "kerusakan_sarana", severity: "medium", status: "resolved", latitude: -7.2654, longitude: 112.7521, reportedAt: daysAgo(11, 7), resolvedAt: daysAgo(10, 15), estimatedLoss: 12000000, responseTimeMinutes: 28 },
    { id: makeId(354), title: "Akses Tidak Sah Area Teknis Depo", description: "Orang tidak dikenal terdeteksi memasuki zona teknis tanpa badge.", province: "Jawa Timur", site: "Depo LRT Waru Sidoarjo", businessUnit: "Security Kawasan", category: "keamanan_fisik", severity: "medium", status: "resolved", latitude: -7.3854, longitude: 112.7232, reportedAt: daysAgo(14, 3), resolvedAt: daysAgo(14, 2), estimatedLoss: 0, responseTimeMinutes: 8 },
    { id: makeId(355), title: "Tumpahan Cairan Rem Kendaraan", description: "Reservoir cairan rem bocor di area perawatan.", province: "Jawa Timur", site: "Bengkel Kendaraan Operasional Malang", businessUnit: "Cleaning Services", category: "tumpahan_b3", severity: "low", status: "resolved", latitude: -7.9797, longitude: 112.6304, reportedAt: daysAgo(18, 16), resolvedAt: daysAgo(18, 15), estimatedLoss: 850000, responseTimeMinutes: 12 },
    { id: makeId(356), title: "Vandalisme CCTV Parkir Malam", description: "2 kamera CCTV dirusak pada dini hari.", province: "Jawa Timur", site: "Parkir Malam Galaxy Mall", businessUnit: "Manajemen Parkir", category: "vandalisme", severity: "medium", status: "resolved", latitude: -7.2814, longitude: 112.7637, reportedAt: daysAgo(20, 2), resolvedAt: daysAgo(19, 14), estimatedLoss: 5400000, responseTimeMinutes: 31 },
    { id: makeId(357), title: "Gangguan Sistem AC Kereta", description: "Sistem pendingin gerbong 3 dan 5 mati saat puncak penumpang.", province: "Jawa Timur", site: "Lintas Surabaya-Gresik", businessUnit: "LRT & Transportasi Rel", category: "disruption_teknis", severity: "low", status: "resolved", latitude: -7.1637, longitude: 112.6481, reportedAt: daysAgo(22, 13), resolvedAt: daysAgo(22, 11), estimatedLoss: 3200000, responseTimeMinutes: 22 },
    { id: makeId(358), title: "Pencurian Alat Cleaning Malam", description: "Mesin poles lantai industri hilang dari gudang cleaning.", province: "Jawa Timur", site: "Gudang Cleaning RS Graha Amerta", businessUnit: "Cleaning Services", category: "pencurian", severity: "medium", status: "open", latitude: -7.2578, longitude: 112.7388, reportedAt: daysAgo(25, 22), estimatedLoss: 8700000, responseTimeMinutes: 45 },
  ];
}

function generateSumselIncidents(): Incident[] {
  return [
    { id: makeId(300), title: "Pencurian TBS Lintas Malam – Kab. Banyuasin", description: "Pencurian TBS oleh kelompok bersenjata di akses jalan produksi.", province: "Sumatera Selatan", site: "Jalan Produksi Kab. Banyuasin", businessUnit: "Perkebunan Sawit", category: "pencurian", severity: "critical", status: "investigating", latitude: -2.68, longitude: 104.81, reportedAt: daysAgo(1, 3), estimatedLoss: 38000000, responseTimeMinutes: 21 },
    { id: makeId(301), title: "Kebakaran Lahan – Kebun OKI", description: "Api dari lahan gambut merambat ke kebun sawit, 2 hektar terbakar.", province: "Sumatera Selatan", site: "Kebun OKI, Kab. Ogan Komering Ilir", businessUnit: "Perkebunan Sawit", category: "kebakaran", severity: "critical", status: "resolved", latitude: -3.24, longitude: 105.52, reportedAt: daysAgo(4, 8), resolvedAt: daysAgo(3, 18), estimatedLoss: 71000000, responseTimeMinutes: 32 },
    { id: makeId(302), title: "Tumpahan CPO di Dermaga Sungai", description: "Selang pipa pengisian kapal bocor, CPO tumpah ke sungai.", province: "Sumatera Selatan", site: "Dermaga Sungai Musi, Palembang", businessUnit: "Perkebunan Sawit", category: "tumpahan_b3", severity: "high", status: "resolved", latitude: -2.99, longitude: 104.77, reportedAt: daysAgo(7, 6), resolvedAt: daysAgo(6, 20), estimatedLoss: 29000000, responseTimeMinutes: 17 },
    { id: makeId(303), title: "K3: Kecelakaan Truk Pengangkut TBS", description: "Truk terguling di tikungan tajam jalan produksi, 1 luka berat.", province: "Sumatera Selatan", site: "Jalan Produksi Km 7, Kab. Musi Banyuasin", businessUnit: "Perkebunan Sawit", category: "k3_lingkungan", severity: "high", status: "resolved", latitude: -2.41, longitude: 104.22, reportedAt: daysAgo(11, 14), resolvedAt: daysAgo(11, 10), estimatedLoss: 14500000, responseTimeMinutes: 24 },
    { id: makeId(304), title: "Geofence Breach – Kebun Selatan Muba", description: "Deteksi kendaraan asing melewati pagar perimeter barat daya.", province: "Sumatera Selatan", site: "Perimeter Barat Daya Kab. Muba", businessUnit: "Security Kawasan", category: "geofence_breach", severity: "medium", status: "resolved", latitude: -2.59, longitude: 103.64, reportedAt: daysAgo(14, 9), resolvedAt: daysAgo(14, 8), estimatedLoss: 2100000, responseTimeMinutes: 16 },
    { id: makeId(305), title: "Kerusakan Boiler PKS Prabumulih", description: "Kerak berlebih pada tabung boiler menyebabkan tekanan drop.", province: "Sumatera Selatan", site: "PKS Prabumulih, Kab. Prabumulih", businessUnit: "Perkebunan Sawit", category: "kerusakan_sarana", severity: "medium", status: "resolved", latitude: -3.43, longitude: 104.24, reportedAt: daysAgo(18, 12), resolvedAt: daysAgo(17, 22), estimatedLoss: 11000000, responseTimeMinutes: 19 },
    { id: makeId(306), title: "Pencurian Peralatan Bengkel", description: "Alat las dan dongkrak hilang dari workshop malam.", province: "Sumatera Selatan", site: "Workshop PKS Serimbu", businessUnit: "Perkebunan Sawit", category: "pencurian", severity: "medium", status: "open", latitude: -3.12, longitude: 104.36, reportedAt: daysAgo(21, 4), estimatedLoss: 9200000, responseTimeMinutes: 38 },
    { id: makeId(307), title: "K3: Tersengat Lebah di Lahan", description: "Pekerja terkena serangan lebah saat pemangkasan pelepah.", province: "Sumatera Selatan", site: "Blok E, Afdeling 2, Kab. OKU Timur", businessUnit: "Perkebunan Sawit", category: "k3_lingkungan", severity: "low", status: "resolved", latitude: -4.21, longitude: 104.12, reportedAt: daysAgo(25, 8), resolvedAt: daysAgo(25, 7), estimatedLoss: 600000, responseTimeMinutes: 28 },
  ];
}

function generateJatengIncidents(): Incident[] {
  return [
    { id: makeId(250), title: "Kerusakan Rel Akibat Longsor – KM 34", description: "Longsor dari tebing merusak jalur rel di lereng bukit.", province: "Jawa Tengah", site: "KM 34 Jalur Semarang-Solo", businessUnit: "LRT & Transportasi Rel", category: "kerusakan_sarana", severity: "critical", status: "resolved", latitude: -7.07, longitude: 110.42, reportedAt: daysAgo(3, 17), resolvedAt: daysAgo(1, 8), estimatedLoss: 185000000, responseTimeMinutes: 12 },
    { id: makeId(251), title: "Pencurian Kendaraan – Parkir RSI Sultan Agung", description: "Motor hilang dari area parkir basement saat jam besuk malam.", province: "Jawa Tengah", site: "Parkir RSI Sultan Agung Semarang", businessUnit: "Manajemen Parkir", category: "pencurian", severity: "medium", status: "open", latitude: -6.9797, longitude: 110.4237, reportedAt: daysAgo(8, 21), estimatedLoss: 22000000, responseTimeMinutes: 35 },
    { id: makeId(252), title: "K3: Petugas Cleaning Terjatuh dari Tangga", description: "Tangga lipat tidak stabil, petugas jatuh dari ketinggian 2m.", province: "Jawa Tengah", site: "Lobby Kantor Gubernur Jawa Tengah", businessUnit: "Cleaning Services", category: "k3_lingkungan", severity: "medium", status: "resolved", latitude: -6.9889, longitude: 110.4151, reportedAt: daysAgo(12, 9), resolvedAt: daysAgo(12, 7), estimatedLoss: 3400000, responseTimeMinutes: 18 },
    { id: makeId(253), title: "Tumpahan Cairan Kimia Gudang", description: "Drum kimia pembersih jatuh dan pecah saat bongkar muat.", province: "Jawa Tengah", site: "Gudang Chemical Cleaning Kudus", businessUnit: "Cleaning Services", category: "tumpahan_b3", severity: "medium", status: "resolved", latitude: -6.8041, longitude: 110.8421, reportedAt: daysAgo(16, 6), resolvedAt: daysAgo(16, 4), estimatedLoss: 4800000, responseTimeMinutes: 22 },
    { id: makeId(254), title: "Akses Tidak Sah Depo Kereta Tawang", description: "Seseorang tertangkap memasuki area depo tanpa izin.", province: "Jawa Tengah", site: "Depo Kereta Semarang Tawang", businessUnit: "Security Kawasan", category: "keamanan_fisik", severity: "low", status: "resolved", latitude: -6.9638, longitude: 110.4245, reportedAt: daysAgo(20, 4), resolvedAt: daysAgo(20, 4), estimatedLoss: 0, responseTimeMinutes: 9 },
    { id: makeId(255), title: "Gangguan Sistem Parkir Elektronik", description: "RFID reader tidak merespons, antrean kendaraan menumpuk.", province: "Jawa Tengah", site: "Parkir DP Mall Semarang", businessUnit: "Manajemen Parkir", category: "disruption_teknis", severity: "low", status: "resolved", latitude: -6.9945, longitude: 110.4039, reportedAt: daysAgo(24, 13), resolvedAt: daysAgo(24, 12), estimatedLoss: 2100000, responseTimeMinutes: 16 },
  ];
}

function generateBantenIncidents(): Incident[] {
  return [
    { id: makeId(200), title: "Kebakaran Panel Listrik – Serpong", description: "Panel distribusi terbakar di sub-basement gedung komersial.", province: "Banten", site: "Gedung The Breeze BSD City", businessUnit: "Security Kawasan", category: "kebakaran", severity: "high", status: "resolved", latitude: -6.3019, longitude: 106.6633, reportedAt: daysAgo(6, 14), resolvedAt: daysAgo(6, 11), estimatedLoss: 27000000, responseTimeMinutes: 8 },
    { id: makeId(201), title: "Pencurian Kendaraan – Tangerang Selatan", description: "Mobil sedan hilang dari gedung parkir bertingkat malam.", province: "Banten", site: "Parkir ICE BSD Tangerang Selatan", businessUnit: "Manajemen Parkir", category: "pencurian", severity: "high", status: "investigating", latitude: -6.3011, longitude: 106.6551, reportedAt: daysAgo(10, 2), estimatedLoss: 320000000, responseTimeMinutes: 22 },
    { id: makeId(202), title: "K3: Kecelakaan Minor Petugas Cleaning", description: "Petugas terpotong saat membersihkan pecahan kaca.", province: "Banten", site: "Lobby Graha Cimone Tangerang", businessUnit: "Cleaning Services", category: "k3_lingkungan", severity: "low", status: "resolved", latitude: -6.1781, longitude: 106.6297, reportedAt: daysAgo(17, 8), resolvedAt: daysAgo(17, 7), estimatedLoss: 750000, responseTimeMinutes: 13 },
    { id: makeId(203), title: "Gangguan Sensor Parkir Otomatis", description: "Sensor ultrasonik gagal mendeteksi kendaraan, display tidak akurat.", province: "Banten", site: "Parkir Otomatis Lippo Mall Puri", businessUnit: "Manajemen Parkir", category: "disruption_teknis", severity: "low", status: "resolved", latitude: -6.1861, longitude: 106.7219, reportedAt: daysAgo(22, 16), resolvedAt: daysAgo(22, 15), estimatedLoss: 1800000, responseTimeMinutes: 17 },
  ];
}

function generateKalbarIncidents(): Incident[] {
  return [
    { id: makeId(150), title: "Pencurian TBS Malam – Kab. Ketapang", description: "Sekelompok orang dengan 2 truk memasuki kebun dan membawa TBS.", province: "Kalimantan Barat", site: "Kebun Ketapang, Kalimantan Barat", businessUnit: "Perkebunan Sawit", category: "pencurian", severity: "high", status: "investigating", latitude: -1.82, longitude: 109.98, reportedAt: daysAgo(2, 1), estimatedLoss: 21000000, responseTimeMinutes: 28 },
    { id: makeId(151), title: "Kebakaran Gudang Pupuk Sanggau", description: "Gudang penyimpanan pupuk terbakar, 20 ton pupuk rusak.", province: "Kalimantan Barat", site: "Gudang Pupuk Kab. Sanggau", businessUnit: "Perkebunan Sawit", category: "kebakaran", severity: "critical", status: "resolved", latitude: 0.13, longitude: 110.59, reportedAt: daysAgo(9, 11), resolvedAt: daysAgo(9, 6), estimatedLoss: 48000000, responseTimeMinutes: 19 },
    { id: makeId(152), title: "K3: Tertimpa Pelepah Kelapa Sawit", description: "Pekerja tertimpa pelepah saat panen, cedera kepala ringan.", province: "Kalimantan Barat", site: "Blok C, Afdeling 3, Kab. Melawi", businessUnit: "Perkebunan Sawit", category: "k3_lingkungan", severity: "medium", status: "resolved", latitude: -0.85, longitude: 111.62, reportedAt: daysAgo(15, 7), resolvedAt: daysAgo(15, 6), estimatedLoss: 2700000, responseTimeMinutes: 34 },
    { id: makeId(153), title: "Geofence Breach – Perbatasan Kebun Landak", description: "Pergerakan tidak dikenal menyeberangi perimeter utara.", province: "Kalimantan Barat", site: "Perimeter Utara Kab. Landak", businessUnit: "Security Kawasan", category: "geofence_breach", severity: "medium", status: "resolved", latitude: 0.34, longitude: 109.86, reportedAt: daysAgo(21, 4), resolvedAt: daysAgo(21, 3), estimatedLoss: 1400000, responseTimeMinutes: 23 },
  ];
}

function generateSulselIncidents(): Incident[] {
  return [
    { id: makeId(100), title: "Pencurian Peralatan Security Kantor", description: "Alat komunikasi dan baterai cadangan dicuri dari pos security.", province: "Sulawesi Selatan", site: "Kantor Perwakilan Makassar", businessUnit: "Security Kawasan", category: "pencurian", severity: "medium", status: "open", latitude: -5.13, longitude: 119.42, reportedAt: daysAgo(4, 18), estimatedLoss: 12500000, responseTimeMinutes: 42 },
    { id: makeId(101), title: "K3: Petugas Cleaning Terpapar Bahan Kimia", description: "Petugas tidak menggunakan masker saat handling cairan desinfektan kuat.", province: "Sulawesi Selatan", site: "Bandara Sultan Hasanuddin Makassar", businessUnit: "Cleaning Services", category: "k3_lingkungan", severity: "medium", status: "resolved", latitude: -5.0617, longitude: 119.5542, reportedAt: daysAgo(12, 7), resolvedAt: daysAgo(12, 5), estimatedLoss: 2200000, responseTimeMinutes: 19 },
    { id: makeId(102), title: "Kerusakan Sistem Tiket Parkir", description: "Printer tiket mati akibat gangguan power supply.", province: "Sulawesi Selatan", site: "Parkir Mal Panakkukang Makassar", businessUnit: "Manajemen Parkir", category: "kerusakan_sarana", severity: "low", status: "resolved", latitude: -5.1474, longitude: 119.4438, reportedAt: daysAgo(19, 12), resolvedAt: daysAgo(19, 11), estimatedLoss: 1400000, responseTimeMinutes: 15 },
  ];
}

function generateKalselIncidents(): Incident[] {
  return [
    { id: makeId(50), title: "Pencurian TBS – Kebun Tanah Bumbu", description: "Kendaraan asing memasuki perimeter pada dini hari.", province: "Kalimantan Selatan", site: "Kebun Tanah Bumbu, Kalsel", businessUnit: "Perkebunan Sawit", category: "pencurian", severity: "high", status: "open", latitude: -3.47, longitude: 115.61, reportedAt: daysAgo(5, 2), estimatedLoss: 17500000, responseTimeMinutes: 38 },
    { id: makeId(51), title: "K3: Luka Mesin Pengupas TBS", description: "Tangan pekerja terkena mesin pengupas saat tidak ada guard pengaman.", province: "Kalimantan Selatan", site: "PKS Pelaihari, Kab. Tanah Laut", businessUnit: "Perkebunan Sawit", category: "k3_lingkungan", severity: "high", status: "resolved", latitude: -3.79, longitude: 114.89, reportedAt: daysAgo(13, 9), resolvedAt: daysAgo(13, 7), estimatedLoss: 8100000, responseTimeMinutes: 22 },
  ];
}

function generateLampungIncidents(): Incident[] {
  return [
    { id: makeId(30), title: "Geofence Breach – Perimeter Kebun Lampung Selatan", description: "Kendaraan tidak dikenal terdeteksi memasuki area perkebunan dini hari.", province: "Lampung", site: "Kebun Way Kanan, Lampung Selatan", businessUnit: "Perkebunan Sawit", category: "geofence_breach", severity: "medium", status: "resolved", latitude: -5.42, longitude: 105.21, reportedAt: daysAgo(8, 3), resolvedAt: daysAgo(8, 2), estimatedLoss: 2800000, responseTimeMinutes: 21 },
    { id: makeId(31), title: "Kerusakan PKS Akibat Banjir", description: "Banjir luapan sungai merendam sebagian area proses PKS.", province: "Lampung", site: "PKS Lampung Tengah", businessUnit: "Perkebunan Sawit", category: "kerusakan_sarana", severity: "high", status: "resolved", latitude: -4.63, longitude: 105.44, reportedAt: daysAgo(18, 14), resolvedAt: daysAgo(16, 8), estimatedLoss: 38000000, responseTimeMinutes: 17 },
  ];
}

function generateAcehIncidents(): Incident[] {
  return [
    { id: makeId(10), title: "Pencurian TBS – Kebun Aceh Tamiang", description: "Pencurian TBS pada malam hari di blok perkebunan terpencil.", province: "Aceh", site: "Kebun Tamiang, Kab. Aceh Tamiang", businessUnit: "Perkebunan Sawit", category: "pencurian", severity: "high", status: "investigating", latitude: 4.17, longitude: 97.87, reportedAt: daysAgo(7, 1), estimatedLoss: 19000000, responseTimeMinutes: 45 },
    { id: makeId(11), title: "K3: Kecelakaan Pemanenan TBS", description: "Dua pekerja terluka akibat dodos panen yang tergelincir.", province: "Aceh", site: "Afdeling 4, Kebun Nagan Raya", businessUnit: "Perkebunan Sawit", category: "k3_lingkungan", severity: "medium", status: "resolved", latitude: 4.02, longitude: 96.32, reportedAt: daysAgo(20, 8), resolvedAt: daysAgo(20, 7), estimatedLoss: 3100000, responseTimeMinutes: 31 },
  ];
}
