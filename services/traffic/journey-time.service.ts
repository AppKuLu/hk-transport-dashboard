import { fetchText } from "@/lib/http";
export async function getJourneyTimes() { const xml = await fetchText("https://example.com/journey-time.xml").catch(() => "<items></items>"); return { rawXmlPreview: xml.slice(0, 500), items: [{ id: "demo", name: "紅磡海底隧道", direction: "九龍往港島", minutes: 8, updatedAt: new Date().toISOString() }] }; }
