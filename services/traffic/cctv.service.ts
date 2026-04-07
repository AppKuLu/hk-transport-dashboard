import { XMLParser } from "fast-xml-parser";
import { fetchText } from "@/lib/http";

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "" });
const CCTV_URL =
  "https://static.data.gov.hk/td/traffic-snapshot-images/code/Traffic_Camera_Locations_En.xml";

function asArray<T>(value: T | T[] | undefined): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export async function getTrafficCctv() {
  const xml = await fetchText(CCTV_URL);
  const parsed = parser.parse(xml);
  const root = parsed?.cameras ?? parsed?.cameraLocations ?? parsed?.root ?? parsed;
  const rows = asArray(root?.camera ?? root?.item ?? root?.location);

  const items = rows.slice(0, 50).map((x: any, i: number) => ({
    id: String(x.id ?? x.cameraId ?? i),
    name: String(x.name ?? x.description ?? x.cameraName ?? "Unknown"),
    lat: Number(x.lat ?? x.latitude ?? x.y ?? 0),
    lon: Number(x.lon ?? x.longitude ?? x.x ?? 0),
    imageUrl: String(x.imageUrl ?? x.url ?? "")
  }));

  return { items, source: CCTV_URL };
}