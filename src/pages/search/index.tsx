import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Search() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Minha Busca</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        // color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    }
});
