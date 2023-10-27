import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const myIcon = L.icon({
  iconUrl: "../assets/images/marker-icon.png",
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

function Map() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/test/getFeatureCollection")
      .then((response) => response.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <MapContainer
      center={[38.9334, 34.8597]}
      zoom={7}
      style={{ height: "100vh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // bounds={[
        //   [35.0, 26.0], // Alt sol köşe (Lat, Lon)
        //   [42.1, 45.0], // Üst sağ köşe (Lat, Lon)   haritayi bu koordinatlar arasiyla sinirlandirmak istersek
        // ]}
      />
      {features.map((feature) =>
        feature.features.map((f) => (
          <Marker
            key={f.id}
            position={f.geometry.coordinates} // Leaflet'in position formati: [lat, lon]
            icon={myIcon}
          >
            <Popup>
              <div>
                <h3>{f.properties.designator}</h3>
                <p>Colour: {f.properties.colour || "Non-Coloured"}</p>
                <p>Type Name: {f.properties.type_name}</p>
              </div>
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
}

export default Map;
