"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const center: LatLngExpression = [22.3193, 114.1694];

type Props = {
  cctv: Array<{ id: string; name: string; lat?: number; lon?: number; imageUrl?: string }>;
  journeyTimes: Array<{ id: string; name: string; direction?: string; minutes?: number; updatedAt?: string }>;
  etas: Array<{ route: string; stop: string; eta: string; dest?: string }>;
};

export default function MapView({ cctv, journeyTimes, etas }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="h-[70vh] overflow-hidden rounded-xl border border-slate-800">
        <MapContainer center={center} zoom={11} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={center}>
            <Popup>Hong Kong</Popup>
          </Marker>
          {cctv.filter(x => Number.isFinite(x.lat) && Number.isFinite(x.lon)).map((cam) => (
            <Marker key={cam.id} position={[cam.lat as number, cam.lon as number] as LatLngExpression}>
              <Popup>
                <div>
                  <div>{cam.name}</div>
                  {cam.imageUrl ? <a href={cam.imageUrl} target="_blank" rel="noreferrer">Open image</a> : null}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>

      <section className="space-y-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h2 className="mb-3 text-lg font-medium">Journey Time</h2>
          <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(journeyTimes, null, 2)}</pre>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h2 className="mb-3 text-lg font-medium">ETA</h2>
          <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(etas, null, 2)}</pre>
        </div>
      </section>
    </div>
  );
}