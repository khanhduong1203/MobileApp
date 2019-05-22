import React, {Component} from 'react';
import {Alert, Text, View, TextInput, TouchableOpacity, TouchableHighlight, StyleSheet, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import io from "socket.io-client/dist/socket.io.js";
import { createStackNavigator, createAppContainer } from 'react-navigation';

var e;
export default class MultiScreen extends React.Component{
  constructor(props){
    super(props);
    
    //ket noi sv
    this.socket = io("http://192.168.10.71:3000", {jsonp:false});
    e = this.socket;
    this.state = {
      name: '',
      roomid: '',
    }
    this.socket.on('server-error-msg',function(data){
      Alert.alert(data.msg);
    });

    this.socket.on('server-send-room-data',function(data){
    	props.navigation.navigate('MultiPlaying', {map:data, socket: e});
    });
  }

  clickCreate(){
    var sdata = {
      name: this.state.name,
      roomid: this.state.roomid
    }
    this.socket.emit('client-create', sdata);
  }

  clickJoin(){
    var sdata = {
      name: this.state.name,
      roomid: this.state.roomid
    }
    this.socket.emit("client-join", sdata)
  }
  static navigationOptions = {
    title: 'ONLINE MEMORY GAME',
    headerLeft: null,
  };
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.goBack());
  }
  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', () => this.props.navigation.goBack());
  }
  render() {
    /*let CardSource = FontAwesome; // set FontAwesome as the default icon source
    let icon_name = 'user-secret';
    Icon onPress = {()=>{this.clickJoin()}} name="user-secret" color="red" size={50}
    let icon_color = 'pink';*/

    return (
      <View style={{flex:1, padding:50}}>
		<Text style={{marginTop:200}}>Your name </Text>
        <TextInput
          style={styles.txtInput}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        /> 
		<Text>Room Code </Text>
        <TextInput
          style={styles.txtInput}
          onChangeText={(roomid) => this.setState({roomid})}
          value={this.state.roomid}
        />
		<View style={{alignItems:'center'}}>
			<TouchableOpacity 
			  onPress = {()=>{this.clickCreate()}}
			  style={styles.btnAdd}>
			  <Text style={{color:'white'}}>Tạo mới</Text>
			</TouchableOpacity>
			<TouchableOpacity 
			  onPress = {()=>{this.clickJoin()}}
			  style={styles.btnAdd}>
			  <Text style={{color:'white'}}>Tham gia</Text>
			</TouchableOpacity>
		</View>
      </View>

    );
  }
}


var styles = StyleSheet.create({
	txtInput:{
		height: 40, 
		borderColor: 'gray', 
		borderColor: 'black', 
		padding:5, 
		borderWidth: 1,
		marginBottom:5
	},
    btnAdd:{
        backgroundColor:'#EF1457',
        padding:8,
		height: 40,
		width:100,
		marginTop:20,
		alignItems:'center'
	}
})