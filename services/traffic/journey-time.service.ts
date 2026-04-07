import { XMLParser } from "fast-xml-parser";
import { fetchText } from "@/lib/http";

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "" });
const JTI_URL =
  "https://static.data.gov.hk/td/journey-time-indicators-v2/journey-time-indicators-v2.xml";

function asArray<T>(value: T | T[] | undefined): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export async function getJourneyTimes() {
  const xml = await fetchText(JTI_URL);
  const parsed = parser.parse(xml);
  const root = parsed?.journeyTimeIndicators ?? parsed?.root ?? parsed;
  const rows = asArray(root?.journeyTimeIndicator ?? root?.item ?? root?.segment);

  const items = rows.slice(0, 50).map((x: any, i: number) => ({
    id: String(x.id ?? x.routeId ?? i),
    name: String(x.name ?? x.description ?? x.routeName ?? "Unknown"),
    direction: String(x.direction ?? x.dir ?? ""),
    minutes: Number(x.minutes ?? x.journeyTime ?? x.travelTime ?? 0),
    updatedAt: String(x.captureDate ?? x.updatedAt ?? new Date().toISOString())
  }));

  return { items, source: JTI_URL };
}