import { StyleSheet, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign In for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />
            <NavLink
                text="Don't have an account? Go back to sign up."
                routeName='SignUp'
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
};

export default SigninScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})