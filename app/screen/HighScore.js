import React from "react";
import {
  AsyncStorage,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  BackHandler,
  Alert,
  Dimensions
} from "react-native";
import Leaderboard from "react-native-leaderboard";
const screenWidth = Math.round(Dimensions.get('window').width);
export default class HighScore extends React.Component {
  constructor(props) {
    super(props);
    //this.getAllData = this.getAllData.bind(this)
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.navigate("Home");
      return true;
    });
  }

  UNSAFE_componentWillMount() {
    this.getAllData();
    BackHandler.removeEventListener('hardwareBackPress', () => this.props.navigation.goBack());
  }

  getAllData = async () => {
    try {
      var _data = [];
      var item = null;
      await AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
          var I = stores.length;
          stores.map((result, i, store) => {
            item = JSON.parse(store[i][1]);
            _data.push(item);
            // duyet het cac diem cao roi setState data
            if (i === I - 1) {
              this.setState({ data: _data });
              //console.log(this.state.data)
            }
            return true;
          });
        });
      });
    } catch {
      alert("error");
    }
  }

  onReset = async () => {
    Alert.alert(
      'Warning',
      'Are you sure to delete all high scores?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { 
          text: 'OK', 
          onPress: () => {
            AsyncStorage.clear();
            this.setState({data:[]})
          } 
        }
      ],
      { cancelable:false }
    )
  }

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <Text style={styles.name}>Leader Board</Text>
        <Leaderboard
          data={this.state.data}
          labelBy="userName"
          sortBy="highScore"
        />

        <TouchableOpacity onPress={this.onReset} style={styles.reset}>
          <Text style={styles.textBtn}>Reset</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  name: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#EF1457",
    color: "white",
    width: screenWidth
  },
  reset:{
    backgroundColor:'black',
    width:160,
    marginTop:30,
    borderRadius: 10,
    padding:8 
  },
  textBtn:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
  },
});
