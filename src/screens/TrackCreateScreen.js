// import '../screens/_mockLocation'
import { StyleSheet, SafeAreaView } from 'react-native'
import React, { useContext, useCallback } from 'react'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import { withNavigationFocus } from 'react-navigation'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback(location => { addLocation(location, recording); }, [recording]);
    const [err] = useLocation(isFocused || recording, callback)


    return (
        <SafeAreaView>
            <Text h3> Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location service</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({})