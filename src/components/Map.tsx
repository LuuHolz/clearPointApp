import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';

const Map = ({ containers }) => {
  const [state, setState] = useState({
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  });

  const position = [state.lat, state.lng];

  return (
    <div className='principalContainer'>
      <div>
        <MapContainer className="leaflet-container" center={position} zoom={state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Un bonito popup de CSS3. <br /> Fácilmente personalizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;

