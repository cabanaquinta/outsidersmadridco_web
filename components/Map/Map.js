import React from "react";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconMarker2x from "leaflet/dist/images/marker-icon-2x.png";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconMarkerShadow from "leaflet/dist/images/marker-shadow.png";

export default function Map() {
    const position = [40.360462, -3.5971498];

    useEffect(() => {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: iconMarker2x.src,
            iconUrl: iconMarker.src,
            shadowUrl: iconMarkerShadow.src,
        });
    }, []);
    return (
        <MapContainer
            style={{ width: "100%", height: "100%" }}
            center={position}
            zoom={10}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Av. del Ensanche de Vallecas, 83, 28051 Madrid, Spain
                </Popup>
            </Marker>
        </MapContainer>
    );
}
