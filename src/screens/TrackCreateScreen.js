// import '../screens/_mockLocation'
import { StyleSheet, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import { withNavigationFocus } from 'react-navigation'

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext)
    const [err] = useLocation(isFocused, addLocation)


    return (
        <SafeAreaView>
            <Text h3> Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location service</Text> : null}
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({})