import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
export default class Home extends React.Component{

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.view}>
                <Button type='outline' title='Single Player' style={styles.btn}
                        onPress={() => navigate('Single')}/>
                
                <Button title='Multi Players' style={styles.btn}              
                        onPress={() => navigate('Multi')}/>
            </View>
        );
    }
} 

var styles = StyleSheet.create({
    view:{

    },
    btn:{
        backgroundColor: 'blue'
    }
})