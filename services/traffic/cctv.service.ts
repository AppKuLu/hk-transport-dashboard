import { env } from "@/lib/env";
import { fetchText } from "@/lib/http";
export async function getTrafficCctv() { const xml = await fetchText("https://static.data.gov.hk/td/traffic-snapshot-images/code/Traffic_Camera_Locations_En.xml"); return { xmlPreview: xml.slice(0, 500) }; }
