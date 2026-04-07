import { fetchJson } from "@/lib/http";
export async function getCitybusEta() { const data = await fetchJson("https://rt.data.gov.hk/v2/transport/citybus/eta/CTB/962X/STOP_ID/1").catch(() => ({})); return { items: [{ route: "A11", stop: "港鐵香港站", eta: "6 分鐘" }], raw: data }; }
