import React from 'react';
// import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; // 6.2.2
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Single from './app/screen/Single';
import Home from './app/screen/Home';
import HighScore from './app/screen/HighScore';
import Prepare from './app/screen/Prepare';
import Help from './app/screen/Help';
import MultiLogin from './app/screen/MultiLogin';
import MultiPlaying from './app/screen/MultiPlaying';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Single: {screen: Single},
    HighScore: {screen: HighScore},
    Prepare: {screen: Prepare},
    Help: { screen: Help },
    MultiLogin : { screen: MultiLogin },
    MultiPlaying : { screen: MultiPlaying }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      //headerMode: 'none',
      headerShown: false,
      navigationOptions: {
        headerVisible: false,
      }
    }
  }

);

const App = createAppContainer(MainNavigator);

export default App;