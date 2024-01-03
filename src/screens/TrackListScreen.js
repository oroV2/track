import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem } from 'react-native-elements'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    return (
        <View>
            <NavigationEvents onWillFocus={() => fetchTracks()} />
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

export default TrackListScreen

const styles = StyleSheet.create({})