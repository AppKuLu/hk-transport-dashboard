"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("./map-view"), { ssr: false });

export function MapShell({ cctv, journeyTimes, etas }: any) {
  return <MapView cctv={cctv} journeyTimes={journeyTimes} etas={etas} />;
}