import React from 'react'
import Modal from "react-native-modal"
import { StyleSheet, View, Button, Text,TouchableOpacity } from 'react-native';
export default class ModalResult extends React.Component{
    // state = {
    //     isModalVisible: this.props.isModalVisible,
    // };
    
    _toggleModal = () =>
        this.props.isModalVisible = !this.props.isModalVisible 
    
    render(){
        return(
            <View>
                <Modal isVisible={this.props.isModalVisible}>
                    <View style={styles.modal}>
                        <Text style={styles.text}>YOU WIN !!!</Text>
                        <TouchableOpacity style={styles.btn} onPress={this.props.onModal}>
                            <Text style={styles.textBtn}>High Score!</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    modal:{
        backgroundColor:'white',
        borderRadius: 10,
        width:200,
        height:200,
        marginLeft:60
    },
    text:{
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color:'green'
    },
    btn:{
        backgroundColor:'#FF00A6',
        width:100,
        marginTop:30,
        borderRadius: 10,
        marginLeft:50 
    },
    textBtn:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
    }

})