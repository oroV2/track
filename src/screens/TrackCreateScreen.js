import './_mockLocation'
import { StyleSheet, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext)
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, (location) => {
                addLocation(location)
            });
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, [])

    return (
        <SafeAreaView>
            <Text h3> Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location service</Text> : null}
        </SafeAreaView>
    )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})