import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; // 6.2.2
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Single from './app/screen/Single';
import Multi from './app/screen/Multi';
import Home from './app/screen/Home';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      }
    },
    Single: {screen: Single},
    Multi: {screen: Multi}
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerMode: 'none',
      header:null,
      navigationOptions: {
        headerVisible: false,
    }
    }
  }

);

const App = createAppContainer(MainNavigator);

export default App;