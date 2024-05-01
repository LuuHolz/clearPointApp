import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ containers }) => {

//                                                                        containers.data es un array
  const dataArray = Array.isArray(containers) ? containers.slice(0, 30) : (containers.data ? containers.data.slice(0, 30) : []);
  console.log(dataArray, "holaaaa");

  return (
    <div className='principalContainer'>
      <div>
        <MapContainer className="leaflet-container" center={[40, -4]} zoom={6}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {dataArray.map((container, index) => (
            <Marker key={index} position={[container.latitud, container.longitud]}>
              <Popup>
                Aquí hay un contenedor
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
