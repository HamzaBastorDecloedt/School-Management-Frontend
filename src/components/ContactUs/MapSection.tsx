import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapSection: React.FC = () => {
  const position: [number, number] = [25.2374, 55.3213];

  const AutoOpenPopup = () => {
    const markerRef = React.useRef<L.Marker>(null);

    useEffect(() => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }, []);

    return (
      <Marker ref={markerRef} position={position}>
        <Popup>Umm Hurair 2</Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      id="location"
      center={position}
      zoom={15}
      style={{ height: "392px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <AutoOpenPopup />
    </MapContainer>
  );
};

export default MapSection;
