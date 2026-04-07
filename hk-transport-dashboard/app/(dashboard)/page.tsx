import { MapShell } from "./_components/map-shell";

async function getJourneyTimes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/traffic/journey-time`, { cache: "no-store" });
  return res.ok ? (await res.json()).items : [];
}
async function getEtas() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/bus/eta`, { cache: "no-store" });
  return res.ok ? (await res.json()).items : [];
}
export default async function DashboardPage() {
  const [journeyTimes, etas] = await Promise.all([getJourneyTimes(), getEtas()]);
  return <MapShell journeyTimes={journeyTimes} etas={etas} />;
}
