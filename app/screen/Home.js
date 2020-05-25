import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, StatusBar, Dimensions, BackHandler, Alert} from 'react-native';
import { withNavigationFocus } from 'react-navigation';

const screenWidth = Math.round(Dimensions.get('window').width);
// const Sound = require('react-native-sound');

class Home extends React.Component{
      
    componentDidMount(){
        StatusBar.setHidden(true);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    
    UNSAFE_componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        if (this.props.isFocused){
            Alert.alert(
                'Exit App',
                'Exiting the application?', [{
                    text: 'Cancel',
                    style: 'cancel'
                }, {
                    text: 'OK',
                    onPress: () => BackHandler.exitApp()
                }, ], {
                    cancelable: false
                }
            )
            return true;
        }
    } 

    render(){
        const {navigate} = this.props.navigation;
        return(
            // <ImageBackground source={require('./../../assets/splash.png')} style={styles.container}>
                <View style={styles.view}>
                    <Image style={styles.img} source={require('../../assets/icon.png')}/>
                    <View style={styles.btns}>
                        <TouchableOpacity style={styles.btnSingle} onPress={() => navigate('Prepare')}>
                            <Text style={styles.textBtnSingle}>Single Player</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnMulti} onPress={() => navigate('MultiLogin')}>
                            <Text style={styles.textBtnMulti}>Multi Players</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnHScore} onPress={() => navigate('HighScore')}>
                            <Text style={styles.textHbtn} >High Score</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnHelp} onPress={() => navigate('Help')}>
                            <Text style={styles.textHelp} >Help</Text>
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
    },
    img:{
        marginTop:100,
        marginBottom:200
    },  
    btns:{
        flex:1,
        width: screenWidth ,
    },
    btnSingle:{
        flex:1,
        backgroundColor:'#EF1457',
        padding:8 
    },
    btnMulti:{
        flex:1,
        backgroundColor:'#fff',
        padding:8 
    },
    btnHScore:{
        flex:1,
        backgroundColor:'green',
        padding:8 
    },
    btnHelp:{
        flex:1,
        backgroundColor:'yellow',
        padding:8 
    },
    textBtnSingle:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
    },
    textBtnMulti:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'#EF1457',
    },
    textHbtn:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'yellow',
    },
    textHelp:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'green',
    }
})

export default withNavigationFocus(Home);   