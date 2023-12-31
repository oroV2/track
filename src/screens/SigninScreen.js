import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'

const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(AuthContext);
    return (
        <View style={styles.container}>
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