import { StyleSheet, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { Button, Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>AccountScreen</Text>
            <Spacer>
                <Button title='Sign Out' onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
}

export default AccountScreen

const styles = StyleSheet.create({})