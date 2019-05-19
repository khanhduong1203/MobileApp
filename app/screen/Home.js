import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ImageBackground, Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Home extends React.Component{

    render(){
        const {navigate} = this.props.navigation;
        return(
            // <ImageBackground source={require('./../../assets/splash.png')} style={styles.container}>
                <View style={styles.view}>
                    <Image style={styles.img} source={require('../../assets/icon.png')}/>
                    <View style={styles.btns}>
                        <TouchableOpacity style={styles.btn} onPress={() => navigate('Single')}>
                            <Text style={styles.textBtn}>Single Player</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2} onPress={() => navigate('Multi')}>
                            <Text style={styles.textBtn}>Multi Players</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hbtn} onPress={() => navigate('HighScore')}>
                            <Text style={styles.textHbtn} >High Score</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            // </ImageBackground>
        );
    }
} 

var styles = StyleSheet.create({
    container:{
        flex:1,
        width:null,
        height:null
    },
    view:{
        flex:1,
        alignItems:'center',
        // backgroundColor: 'white'
    },
    img:{
        marginTop:100,
        marginBottom:200
    },  
    btns:{
        flex:1,
        width: screenWidth ,
        // backgroundColor: 'white',
        // marginTop:100
    },
    btn:{
        flex:1,
        backgroundColor:'#EF1457',
        // width:160,
        // marginTop:30,
        //borderRadius: 10,
        //marginLeft:100,
        padding:8 
    },
    btn2:{
        flex:1,
        backgroundColor:'#EF1457',
        //borderRadius: 10,
        //marginLeft:100,
        padding:8 
    },
    hbtn:{
        flex:1,
        backgroundColor:'green',
        // width:160,
        // marginTop:30,
        //borderRadius: 10,
        //marginLeft:100,
        padding:8 
    },
    textBtn:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
    },
    textHbtn:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'yellow',
    }
})