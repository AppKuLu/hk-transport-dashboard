"use client";

import dynamic from "next/dynamic";
import type { LatLngExpression } from "leaflet";
import { Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
) as any;

const center: LatLngExpression = [22.3193, 114.1694];

type MapViewProps = {
  journeyTimes?: unknown;
  etas?: unknown;
};

export default function MapView({ journeyTimes, etas }: MapViewProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="h-[70vh] overflow-hidden rounded-xl border border-slate-800">
        <MapContainer
          center={center}
          zoom={11}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={center}>
            <Popup>Hong Kong</Popup>
          </Marker>
        </MapContainer>
      </section>

      <section className="space-y-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h2 className="mb-3 text-lg font-medium">Journey Time</h2>
          <pre className="text-xs whitespace-pre-wrap">
            {JSON.stringify(journeyTimes, null, 2)}
          </pre>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h2 className="mb-3 text-lg font-medium">ETA</h2>
          <pre className="text-xs whitespace-pre-wrap">
            {JSON.stringify(etas, null, 2)}
          </pre>
        </div>
      </section>
    </div>
  );
}