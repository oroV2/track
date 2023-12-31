import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    console.log(state);
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                text="Already have an account? Sign in instead."
                routeName='SignIn'
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
};

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})