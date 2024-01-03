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
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { FontAwesome } from '@expo/vector-icons'

const trackListFlow = createStackNavigator({
  TrackList: TracksListScreen,
  TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name='th-list' size={20} />
}

const createSwitchNavigators = createSwitchNavigator({
  ResolveAuthScreen: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SignUp: SignupScreen,
    SignIn: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
})

const App = createAppContainer(createSwitchNavigators);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}
