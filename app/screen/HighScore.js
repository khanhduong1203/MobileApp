import React from "react";
import {
  AsyncStorage,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  BackHandler
} from "react-native";
import Leaderboard from "react-native-leaderboard";

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

  componentWillMount() {
    this.getAllData();
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

  onReload = async () => {
    AsyncStorage.clear();
  }

  render() {
    return (
      <View>
        <Text style={styles.name}>Leader Board</Text>
        <Leaderboard
          data={this.state.data}
          labelBy="userName"
          sortBy="highScore"
        />

        <TouchableOpacity onPress={this.onReload}>
          <Text>Reload</Text>
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
    color: "white"
  }
});
