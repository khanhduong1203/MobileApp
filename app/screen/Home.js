import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default class Home extends React.Component{

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.view}>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigate('Single')}>
                        <Text style={styles.textBtn}>Single Player</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigate('Multi')}>
                        <Text style={styles.textBtn}>Multi Players</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
} 

var styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor: '#EF1457'
    },
    btns:{
        backgroundColor: '#EF1457',
        marginTop:300
    },
    btn:{
        backgroundColor:'white',
        width:160,
        marginTop:30,
        borderRadius: 10,
        marginLeft:100,
        padding:8 
    },
    textBtn:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'black',
    }
})