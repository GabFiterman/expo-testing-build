import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const Map = () => {

    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={8}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        </MapContainer>
    );
};

export default Map;
