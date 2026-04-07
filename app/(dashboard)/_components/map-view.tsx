"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function MapView({ journeyTimes, etas }: any) {
  return <div className="grid gap-6 lg:grid-cols-2"><section className="h-[70vh] rounded-xl overflow-hidden border border-slate-800"><MapContainer center={[22.3193, 114.1694]} zoom={11} className="h-full w-full"><TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" /><Marker position={[22.3193, 114.1694]}><Popup>Hong Kong</Popup></Marker></MapContainer></section><section><pre className="text-xs whitespace-pre-wrap">{JSON.stringify({ journeyTimes, etas }, null, 2)}</pre></section></div>;
}
