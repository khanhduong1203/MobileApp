import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';

export default class Home extends React.Component{

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.view}>
                <Image style={styles.img} source={require('../../assets/icon.png')}/>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigate('Single')}>
                        <Text style={styles.textBtn}>Single Player</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigate('Multi')}>
                        <Text style={styles.textBtn}>Multi Players</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hbtn} onPress={() => navigate('HighScore')}>
                        <Text style={styles.textHbtn} >High Score</Text>
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
    img:{
        marginTop:100,
        marginLeft:85
    },  
    btns:{
        backgroundColor: '#EF1457',
        marginTop:100
    },
    btn:{
        backgroundColor:'white',
        width:160,
        marginTop:30,
        borderRadius: 10,
        marginLeft:100,
        padding:8 
    },
    hbtn:{
        backgroundColor:'green',
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
    },
    textHbtn:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'yellow',
    }
})