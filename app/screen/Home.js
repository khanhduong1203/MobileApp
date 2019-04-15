import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class Home extends React.Component{

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Button title='Single Player' color='#ff1493' 
                        onPress={() => navigate('Single')}/>
                <Button title='Multi Player' color='#ff1493'               
                        onPress={() => navigate('Multi')}/>
            </View>
        );
    }
} 