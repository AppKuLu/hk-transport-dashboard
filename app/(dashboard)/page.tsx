import MapView from "./_components/map-view";

async function fetchJson(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}${path}`, {
    cache: "no-store"
  });
  if (!res.ok) return { items: [] };
  return res.json();
}

export default async function DashboardPage() {
  const [cctv, journeyTime, eta] = await Promise.all([
    fetchJson("/api/traffic/cctv"),
    fetchJson("/api/traffic/journey-time"),
    fetchJson("/api/bus/eta")
  ]);

  return (
    <MapView
      cctv={cctv.items ?? []}
      journeyTimes={journeyTime.items ?? []}
      etas={eta.items ?? []}
    />
  );
}