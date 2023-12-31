import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate({ routeName }) }}>
                <Spacer>
                    <Text style={styles.link}>
                        {text}
                    </Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
}

export default withNavigation(NavLink);

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
})