"use client";
import dynamic from "next/dynamic";
const MapView = dynamic(() => import("./map-view"), { ssr: false });
export function MapShell({ journeyTimes, etas }: any) { return <MapView journeyTimes={journeyTimes} etas={etas} />; }
