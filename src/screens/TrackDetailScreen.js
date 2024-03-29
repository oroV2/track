import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id');
    const { state } = useContext(TrackContext);

    const track = state.find(t => t._id === _id)
    const initialCoords = track.locations[0].coords;
    return (
        <View>
            <Text style={{ fontSize: 48 }}>{track.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
        </View>
    )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
    map: {
        height: 300,
        width: 300
    },
})