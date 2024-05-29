import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
    const uri = process.env.EXPO_PUBLIC_WEBVIEW_URI;
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: uri }}
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
