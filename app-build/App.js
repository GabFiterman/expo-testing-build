import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import getLocation from './services/get-location';

export default function App() {
    const [location, setLocation] = useState(null);
    const [isPermissionResolved, setIsPermissionResolved] = useState(false);
    const uri = process.env.EXPO_PUBLIC_WEBVIEW_URI;

    const onMessage = (event) => {
        console.log({ WebView_message: event.nativeEvent.data });
    };

    useEffect(() => {
        console.log('Starting location request...');
        console.log('WebView URI:', uri);
        getLocation()
            .then((location) => {
                console.log('Location obtained:', location);
                setLocation(location);
                setIsPermissionResolved(true);
            })
            .catch((error) => {
                console.error('Error getting location:', error);
                setLocation({
                    coords: {
                        latitude: parseFloat(
                            process.env.EXPO_PUBLIC_LOCATION_DEFAULT_LAT
                        ),
                        longitude: parseFloat(
                            process.env.EXPO_PUBLIC_LOCATION_DEFAULT_LNG
                        ),
                    },
                });
                setIsPermissionResolved(true);
            });
    }, []);

    return isPermissionResolved ? (
        <View style={styles.container}>
            <WebView
                source={{ uri: uri }}
                style={{ flex: 1 }}
                originWhitelist={['*']}
                onMessage={onMessage}
                injectedJavaScript={`
                    window.initialLocation = ${JSON.stringify(location)};
                    window.postMessage = function(data) {
                        window.ReactNativeWebView.postMessage(data);
                    };
                    console.log = function(...args) {
                        window.postMessage(JSON.stringify(args));
                    }
                `}
            />
        </View>
    ) : (
        <View style={styles.container}>
            <Text style={styles.loadingText}>Carregando...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#585858',
    },
    loadingText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 20,
    },
});
