import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ImageBackground, Dimensions,BackHandler} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

export default class Help extends React.Component{
    UNSAFE_componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.goBack());
    }
    UNSAFE_componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', () => this.props.navigation.goBack());
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            // <ImageBackground source={require('./../../assets/splash.png')} style={styles.container}>
                <View style={styles.view}>
                    <Image style={styles.img} source={require('../../assets/icon.png')}/>
                    <View style={{alignItems:'flex-start'}}>
                    <Text style={styles.txt}>There are n pairs of pictures displayed hidden</Text>
                    <Text style={styles.txt}>Your task is to select 2 identical pictures in 1 turn</Text>
                    <Text style={styles.txt}>You have m turns with a certain time fund</Text>
                    <Text style={styles.txt}>After each turn (flip 2 pictures), your turn will be reduced by 1 unit</Text>
                    <Text style={styles.txt}>Pay attention to the time, if the time is up and you have not finished all your pictures or the number of turns has passed, the game will end.</Text>          
                    </View>
                </View>
            // </ImageBackground>
        );
    }
} 

var styles = StyleSheet.create({
    view:{
        flex:1,
        alignItems:'center'
    },
    img:{
        marginTop:100
    },
    txt:{
        margin:10,
        alignItems:'flex-start'
    }
})