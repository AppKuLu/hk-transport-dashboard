import MapView from "./_components/map-view";
import { getTrafficCctv } from "@/services/traffic/cctv.service";
import { getJourneyTimes } from "@/services/traffic/journey-time.service";
import { getCitybusEta } from "@/services/bus/ctb-eta.service";

export default async function DashboardPage() {
  const [cctv, journeyTime, eta] = await Promise.all([
    getTrafficCctv(),
    getJourneyTimes(),
    getCitybusEta()
  ]);

  return (
    <MapView
      cctv={cctv.items ?? []}
      journeyTimes={journeyTime.items ?? []}
      etas={eta.items ?? []}
    />
  );
}
