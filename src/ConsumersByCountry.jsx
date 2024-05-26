import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ConsumersByCountry = () => {
  const mapRef = useRef(null);

  const target = L.latLng('47.50737', '19.04611'); // Reference for the map container

  useEffect(() => {
    if (mapRef.current !== null) {
      const map = L.map(mapRef.current); // Create Leaflet map instance

      // Add tile layer and other map functionalities
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const target = L.latLng('47.50737', '19.04611');
      map.setView(target, 4);

      L.marker(target).addTo(map);
    }
  }, []); // Run the effect only once

  return (
    <div className="track-and-tracing-ConsumersByCountry-div">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <h3>Consumers By Country</h3>
        <img
          src="Images/bx-border-all.svg"
          alt="Border icon"
          height="20"
          width="20"
          style={{ backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px', marginTop: '5px' }}
        />
      </div>
      <MapContainer center={target} zoom={4} style={{ height: '240px', borderRadius: '10px' }} ref={mapRef}>
        <TileLayer attribution="" url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={target}>
          <Popup>You are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ConsumersByCountry;
