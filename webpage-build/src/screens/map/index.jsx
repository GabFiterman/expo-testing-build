import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const Map = () => {
    const [coordinates, setCoordinates] = useState();
    const ZOOM_LEVEL = 13;
    useEffect(() => {
        setCoordinates(() => {
            if (window.initialLocation) {
                return {
                    latitude: window.initialLocation.coords.latitude,
                    longitude: window.initialLocation.coords.longitude,
                };
            } else {
                return {
                    latitude: -22.824,
                    longitude: -43.523,
                };
            }
        });
    }, []);
    return coordinates?.latitude && (
        <MapContainer
            center={[coordinates.latitude, coordinates?.longitude]}
            zoom={ZOOM_LEVEL}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        </MapContainer>
    );
};

export default Map;
