import { useContext, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { GlobalContext } from '../../contexts/globalContext';

import 'leaflet/dist/leaflet.css';

const Map = () => {
    const { globalContext, globalDispatch } = useContext(GlobalContext);
    const ZOOM_LEVEL = 13;

    useEffect(() => {

        if(window.initialLocation) {
            globalDispatch({
                type: 'SET_COORDINATES',
                payload: {
                    latitude: window.initialLocation.coords.latitude,
                    longitude: window.initialLocation.coords.longitude,
                },
            });
        }
    }, []);

    return (
        globalContext.coordinates && (
            <MapContainer
                center={[
                    globalContext.coordinates?.latitude,
                    globalContext.coordinates?.longitude,
                ]}
                zoom={ZOOM_LEVEL}
                zoomControl={false}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            </MapContainer>
        )
    );
};

export default Map;
