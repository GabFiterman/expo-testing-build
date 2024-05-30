import * as Location from 'expo-location';
import 'dotenv/config';

const getLocation = async () => {
    const LOCATION_DEFAULT_LAT = process.env.EXPO_PUBLIC_LOCATION_DEFAULT_LAT;
    const LOCATION_DEFAULT_LNG = process.env.EXPO_PUBLIC_LOCATION_DEFAULT_LNG;

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        return {
            coords: { latitude: LOCATION_DEFAULT_LAT, longitude: LOCATION_DEFAULT_LNG },
        };
    }

    const location = await Location.getCurrentPositionAsync({});
    return location;
};

export default getLocation;