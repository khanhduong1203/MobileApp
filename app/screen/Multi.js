import React from 'react';
import { StyleSheet, View, Button, BackHandler } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; // 6.2.2

import Header from '../components/Header';
import Score from '../components/Score';
import Card from '../components/Card';
import cardlib from '../cardlib'
import helper from '../helpers';

export default class Multi extends React.Component {

  constructor(props) {
    super(props);
     
    this.state = {
      current_selection: [],
      selected_pairs: [],
      score: 0,
      cards: this.cards
    }
  
  }
  UNSAFE_componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.goBack());
  }
  UNSAFE_componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', () => this.props.navigation.goBack());
  }
  render() {
    return (
      <View >
        
      </View>
    );
  }
}
