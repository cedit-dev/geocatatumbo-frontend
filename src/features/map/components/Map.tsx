// features/map/components/Map.tsx
'use client'
// import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
    const initialCenter: LatLngExpression = [8.2461111111111, -73.355277777778];
    const initialZoom = 10; // Ajustar el nivel de zoom si es necesario


  return (
    <MapContainer center={initialCenter} zoom={initialZoom}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};