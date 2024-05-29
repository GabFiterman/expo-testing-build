import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
    // const WEBVIEW_URI="http://192.168.1.5:4173";
    const WEBVIEW_URI="https://webearts.com";

    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: WEBVIEW_URI }}
                style={{ flex: 1 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#585858',
    },
});
