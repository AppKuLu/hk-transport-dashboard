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
    <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr 1fr", padding: 24 }}>
      <section style={{ height: "70vh", overflow: "hidden", border: "1px solid #334155", borderRadius: 12 }}>
        <MapContainer center={center} zoom={11} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
          <Marker position={center}><Popup>Hong Kong</Popup></Marker>
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

      <section style={{ display: "grid", gap: 16 }}>
        <div style={{ border: "1px solid #334155", borderRadius: 12, background: "#0f172a", padding: 16 }}>
          <h2>Journey Time</h2>
          <pre style={{ fontSize: 12, whiteSpace: "pre-wrap" }}>{JSON.stringify(journeyTimes, null, 2)}</pre>
        </div>
        <div style={{ border: "1px solid #334155", borderRadius: 12, background: "#0f172a", padding: 16 }}>
          <h2>ETA</h2>
          <pre style={{ fontSize: 12, whiteSpace: "pre-wrap" }}>{JSON.stringify(etas, null, 2)}</pre>
        </div>
      </section>
    </div>
  );
}
