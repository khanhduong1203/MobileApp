import React from 'react';
import { AsyncStorage, View, TouchableOpacity, Text } from 'react-native';
import Leaderboard from 'react-native-leaderboard';

export default class HighScore extends React.Component{
    constructor(props){
        super(props)
        //this.getAllData = this.getAllData.bind(this)
        this.state = {
            data: []
        }
    }

    componentWillMount(){
        this.getAllData()
    }

    getAllData = async () =>{
        try{
            var _data = [];
            var item = null
            await AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiGet(keys, (error, stores) => {
                  var I = stores.length
                  stores.map((result, i, store) => {

                    item = JSON.parse(store[i][1]) 
                    _data.push(item)
                    // duyet het cac diem cao roi setState data
                    if(i===I-1) {
                        this.setState({data:_data});
                        //console.log(this.state.data)
                    } 
                    return true;
                  });
                });
            });    
        }
        catch{
            alert('error')
        }
    }

    onReload = () => {
        this.setState({data:this.state.data})
    }

    render(){
        alert(this.state.data)
        return(
            <View>
                {/* <Leaderboard data={this.state.data} sortBy='highScore' labelBy='userName' sortBy='time'/> */}
                
                <TouchableOpacity onPress={this.onReload}>
                    <Text>Reload</Text>
                </TouchableOpacity>
            </View> 
        ) 
    }
} 