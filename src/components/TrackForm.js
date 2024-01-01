import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { Button, Input } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = () => {
    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext)
    return (
        <View>
            <Spacer>
                <Input
                    value={name}
                    onChangeText={changeName}
                    placeholder='Enter Location Name' />
            </Spacer>
            {recording ?
                <Button onPress={stopRecording}
                    title='Stop Recording' />
                :
                <Button
                    onPress={startRecording}
                    title='Start Recording' />
            }
        </View>
    )
}

export default TrackForm

const styles = StyleSheet.create({})