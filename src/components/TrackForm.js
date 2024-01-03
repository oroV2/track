import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { Button, Input } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack();
    return (
        <View>
            <Spacer>
                <Input
                    value={name}
                    onChangeText={changeName}
                    placeholder='Enter Location Name' />
            </Spacer>
            <Spacer>
                {recording ?
                    <Button onPress={stopRecording}
                        title='Stop Recording' />
                    :
                    <Button
                        onPress={startRecording}
                        title='Start Recording' />
                }
            </Spacer>
            <Spacer>
                {
                    !recording && locations.length ? (<Button onPress={saveTrack} title='Save Recording' />) : null
                }
            </Spacer>
        </View>
    )
}

export default TrackForm

const styles = StyleSheet.create({})