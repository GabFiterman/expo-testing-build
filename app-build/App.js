import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [counter, setCounter] = useState(0);
    return (
        <View style={styles.appView}>
            <View tyle={styles.colContainer}>
                <Text style={styles.text_h1}>Testing APP</Text>
            </View>
            <View tyle={styles.colContainer}>
                <Text style={styles.text_h2}>BUILD 1</Text>
            </View>
            <View>
                <Text style={styles.text_h3}>counter: {counter}</Text>
            </View>
            <View style={styles.rowContainer}>
                <TouchableOpacity
                    style={styles.btnCounter}
                    onPress={() => setCounter(counter + 1)}
                >
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnCounter}
                    onPress={() => setCounter(counter - 1)}
                >
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appView: {
        flex: 1,
        backgroundColor: '#330737',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_h1: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },
    text_h2: {
        color: '#fff',
        fontSize: 25,
    },
    text_h3: {
        color: '#fff',
        fontSize: 20,
    },
    btnCounter: {
        backgroundColor: '#df6ee9',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '40%',
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '30%',
        marginTop: 30,
    },
    colContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
