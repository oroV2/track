import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Polyline } from 'react-native-maps'

const Map = () => {
    let points = [];
    for (let i = 0; i < 20; i++) {
        points.push({
            latitude: 37.78825 + i * 0.001,
            longitude: -122.4324 + i * 0.001
        })
    }
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={
                    {
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }
                }>
                <Polyline coordinates={points} />
            </MapView>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        height: 300,
        width: 300
    },
    container: {
        alignItems: 'center'
    }
})