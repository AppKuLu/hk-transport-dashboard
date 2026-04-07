import { fetchJson } from "@/lib/http";

const CTB_BASE = "https://rt.data.gov.hk/v2/transport/citybus";

export async function getCitybusEta() {
  const company = "CTB";
  const route = "A11";
  const stop = "000123";
  const url = `${CTB_BASE}/eta/${company}/${stop}/${route}`;
  const data = await fetchJson(url).catch(() => ({} as any));
  const rows = Array.isArray(data?.data) ? data.data : [];
  const items = rows.slice(0, 10).map((x: any) => ({
    route,
    stop,
    eta: String(x.eta ?? x.eta_min ?? ""),
    dest: String(x.dest_tc ?? x.dest_en ?? "")
  }));
  return { items, source: url };
}
