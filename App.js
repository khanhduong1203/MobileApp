import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; // 6.2.2
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';
import Single from './app/screen/Single';
import Multi from './app/screen/Multi';
import Home from './app/screen/Home';
import HighScore from './app/screen/HighScore';
import Prepare from './app/screen/Prepare';
import Help from './app/screen/Help';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Single: {screen: Single},
    Multi: {screen: Multi},
    HighScore: {screen: HighScore},
    Prepare: {screen: Prepare},
    Help: { screen: Help }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      //headerMode: 'none',
      header:null,
      navigationOptions: {
        headerVisible: false,
      }
    }
  }

);

const App = createAppContainer(MainNavigator);

export default App;