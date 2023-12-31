import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Spacer from './Spacer';
import { Button, Input, Text } from 'react-native-elements';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                value={email}
                onChangeText={setEmail}
                label='Email'
                autoCapitalize='none'
                autoComplete='email'
                autoCorrect={false} />
            <Spacer />
            <Input
                label='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize='none'
                autoComplete='password'
                autoCorrect={false} />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </View>
    )
}

export default AuthForm

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    }
})