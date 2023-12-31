import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TracksListScreen from './src/screens/TrackListScreen';
import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const createSwitchNavigators = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignupScreen,
    SignIn: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TracksListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
})

const App = createAppContainer(createSwitchNavigators);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </AuthProvider>
  )
}
