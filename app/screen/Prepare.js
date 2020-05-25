import React from "react";
import {
  Text,
  View,
  StyleSheet,
  BackHandler,
  TouchableOpacity
} from "react-native";

export default class Prepare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running:true
    };
  }

  UNSAFE_componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.goBack());
  }
  UNSAFE_componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', () => this.props.navigation.goBack());
  }
  render() {
    return (
      <View style={{alignItems:'center'}}>
        <Text style={{marginTop:300, marginBottom:50}}>If you're ready, click START</Text>
        <TouchableOpacity style={styles.btnStart} onPress={()=> this.props.navigation.navigate('Single')}>
          <Text style={styles.txtStart}>START</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnStart:{
    width:100,
    padding:8,
    height:40,
    alignItems:'center',
    backgroundColor:'green'
  },
  txtStart:{
    color:'#fff',
    fontSize:20
  }
});
