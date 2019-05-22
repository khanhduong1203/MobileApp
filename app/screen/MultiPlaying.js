import React, {Component} from 'react';
import {Alert, Text, View, TextInput, TouchableOpacity, BackHandler,
    ToastAndroid, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer } from 'react-navigation';

var sk;
var dficonmap = {
      0: {
        0: {
          name: 'user-secret',
          color: 'red'
        },
        1: {
          name: 'user-secret',
          color: 'red'
        },
        2: {
          name: 'user-secret',
          color: 'red'
        },
        3: {
          name: 'user-secret',
          color: 'red'
        }
      },
      1: {
        0: {
          name: 'user-secret',
          color: 'red'
        },
        1: {
          name: 'user-secret',
          color: 'red'
        },
        2: {
          name: 'user-secret',
          color: 'red'
        },
        3: {
          name: 'user-secret',
          color: 'red'
        }
      },
      2: {
        0: {
          name: 'user-secret',
          color: 'red'
        },
        1: {
          name: 'user-secret',
          color: 'red'
        },
        2: {
          name: 'user-secret',
          color: 'red'
        },
        3: {
          name: 'user-secret',
          color: 'red'
        }
      },
      3: {
        0: {
          name: 'user-secret',
          color: 'red'
        },
        1: {
          name: 'user-secret',
          color: 'red'
        },
        2: {
          name: 'user-secret',
          color: 'red'
        },
        3: {
          name: 'user-secret',
          color: 'red'
        }
      },
    };
export default class PlayScreen extends React.Component{
  constructor(props){
    super(props);
    sk = this;
    this.socket = props.navigation.state.params.socket;
    this.state = {
      room: props.navigation.state.params.map.roomid,
      player1: props.navigation.state.params.map.player1,
      player1point: props.navigation.state.params.map.player1point,
      player2: props.navigation.state.params.map.player2,
      player2point: props.navigation.state.params.map.player2point,
      playing: 0,
      iconmap: dficonmap
    }

    this.socket.on('server-send-play-signal',function(data){
      sk.setState({
        playing: 1
      });
    });

    this.socket.on('server-send-stop-signal',function(data){
      sk.setState({
        playing: 0
      });
    });

    this.socket.on('server-send-point',function(data){
      sk.setState({
        player1point: data.player1,
        player2point: data.player2
      });
      //sk.socket.emit('view-id');
    });

    this.socket.on('server-send-win-signal',function(){
      Alert.alert(
        'Congratulations !',
        'You are the winner', [{
            text: 'OK',
            onPress: () => {
              sk.setState({ iconmap: dficonmap });
              props.navigation.navigate('Home')
            }
        }, ], {
            cancelable: false
        }
      )
    });
    this.socket.on('server-send-lost-signal',function(){
      Alert.alert(
        'Sorry :(',
        'You lose -_-', [{
            text: 'OK',
            onPress: () => {
              sk.setState({ iconmap: dficonmap });
              props.navigation.navigate('Home')
            }
        }, ], {
            cancelable: false
        }
      )
    });
    this.socket.on('server-send-nowin-signal',function(){
      Alert.alert(
        'Try again',
        'Deuce', [{
            text: 'OK',
            onPress: () => {
              sk.setState({ iconmap: dficonmap });
              props.navigation.navigate('Home')
            }
        }, ], {
            cancelable: false
        }
      )
    });

    this.socket.on('server-send-open-img',function(data){
      var newiconmap = sk.state.iconmap;
      newiconmap[data.x][data.y].name = data.imgo.img;
      newiconmap[data.x][data.y].color = data.imgo.color;
      sk.setState({
          iconmap: newiconmap
        });
    });

    this.socket.on('server-send-close-img',function(data){
      var newiconmap = sk.state.iconmap;
      newiconmap[data.x1][data.y1].name = 'user-secret';
      newiconmap[data.x1][data.y1].color = 'red';
      newiconmap[data.x2][data.y2].name = 'user-secret';
      newiconmap[data.x2][data.y2].color = 'red';
      sk.setState({
          iconmap: newiconmap
        });
    });
  }

  componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    if (this.props.isFocused){
      this.setState({running:false})
      Alert.alert(
        'Warning',
        'Are you sure to quit this game?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
            // onPress: () => {
            //   this.setState({running:true})              
            // } 
          },
          { 
            text: 'OK', 
            onPress: () => {
              this.props.navigation.navigate('Home');
            } 
          }
        ],
        { cancelable:false }
      )
      return true;
    }
  }

  onOpen(xi,yi){
    if(this.state.playing == 1 && sk.state.iconmap[xi][yi].name=='user-secret'){
      var datasend = {
        x: xi,
        y: yi
      }
      sk.socket.emit('client-choose-img', datasend);
      sk.setState({
        playing: 0
      });
    }
  }

	static navigationOptions = {
	    title: 'PLAY SCREEN',
      headerLeft: null,
	};

	render() {
    //const map = this.props.navigation.state.params.map;
    return (
      <View style={{flex:1, padding:50}}>
        <Text style={{fontSize: 50}}>Room: {this.state.room}</Text>
        <View style={{flex:1, flexDirection:'row', justifyContent :'space-around'}}>
          <Text>{this.state.player1}: {this.state.player1point}</Text>
          <Text>{this.state.player2}: {this.state.player2point}</Text>
        </View>
        <Text>
          <Icon onPress = {()=>{this.onOpen(0,0)}} name = {this.state.iconmap[0][0].name} color = {this.state.iconmap[0][0].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(0,1)}} name = {this.state.iconmap[0][1].name} color = {this.state.iconmap[0][1].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(0,2)}} name = {this.state.iconmap[0][2].name} color = {this.state.iconmap[0][2].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(0,3)}} name = {this.state.iconmap[0][3].name} color = {this.state.iconmap[0][3].color}  size={50}/>
        </Text>
        <Text>
          <Icon onPress = {()=>{this.onOpen(1,0)}} name = {this.state.iconmap[1][0].name} color = {this.state.iconmap[1][0].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(1,1)}} name = {this.state.iconmap[1][1].name} color = {this.state.iconmap[1][1].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(1,2)}} name = {this.state.iconmap[1][2].name} color = {this.state.iconmap[1][2].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(1,3)}} name = {this.state.iconmap[1][3].name} color = {this.state.iconmap[1][3].color}  size={50}/>
        </Text>
        <Text>
          <Icon onPress = {()=>{this.onOpen(2,0)}} name = {this.state.iconmap[2][0].name} color = {this.state.iconmap[2][0].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(2,1)}} name = {this.state.iconmap[2][1].name} color = {this.state.iconmap[2][1].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(2,2)}} name = {this.state.iconmap[2][2].name} color = {this.state.iconmap[2][2].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(2,3)}} name = {this.state.iconmap[2][3].name} color = {this.state.iconmap[2][3].color}  size={50}/>
        </Text>
        <Text>
          <Icon onPress = {()=>{this.onOpen(3,0)}} name = {this.state.iconmap[3][0].name} color = {this.state.iconmap[3][0].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(3,1)}} name = {this.state.iconmap[3][1].name} color = {this.state.iconmap[3][1].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(3,2)}} name = {this.state.iconmap[3][2].name} color = {this.state.iconmap[3][2].color}  size={50}/>
          <Icon onPress = {()=>{this.onOpen(3,3)}} name = {this.state.iconmap[3][3].name} color = {this.state.iconmap[3][3].color}  size={50}/>
        </Text>
      </View>
    );
  }
}