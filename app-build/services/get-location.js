import * as Location from 'expo-location';

const getLocation = async () => {
    const LOCATION_DEFAULT_LAT = process.env.EXPO_PUBLIC_WEBVIEW_URI;
    const LOCATION_DEFAULT_LNG = process.env.EXPO_PUBLIC_WEBVIEW_URI;

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