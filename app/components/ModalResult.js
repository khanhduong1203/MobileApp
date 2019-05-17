import React from 'react'
import Modal from "react-native-modal"
import { StyleSheet, View, AsyncStorage, Text,TouchableOpacity,TextInput,Dimensions } from 'react-native';
export default class ModalResult extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:'',
            status: true
        }
    }

    onPressBtn = () =>{
        this.saveScore()
        this.setState({name:''})
    }
    onCancel = () => {
        this.props.onModal('')
        //this.props.navigate('Home')
    }
    saveScore = () => {
        const {navigate} = this.props;
        if(this.state.name!==''){
            let item = {userName:this.state.name,highScore:this.props.score}
            AsyncStorage.setItem(this.state.name,JSON.stringify(item));
            this.props.onModal('')
            alert("Saved"+'\n'+JSON.stringify(item))
            navigate('HighScore')
        }else{
            alert('Enter your name')
        }
    }

    setName =(value)=>{
        this.setState({ name: value });
    }
    
    render(){
        
        return(
            <View>
                <Modal isVisible={this.props.isModalVisible}>
                    <View style={styles.modal}>
                        <Text style={styles.text}>{this.props.text}</Text>
                        <TextInput
                            style={styles.formInput} onChangeText={this.setName}
                            placeholder='your name'/>
                        <TouchableOpacity style={styles.btn} onPress={this.onPressBtn}>
                            <Text style={styles.textBtn}>High Score!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={this.onCancel}>
                            <Text style={styles.textBtn}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }

}
const screenWidth = Math.round(Dimensions.get('window').width);
var styles = StyleSheet.create({
    modal:{
        backgroundColor:'white',
        borderRadius: 10,
        //width:300,
        height:300,
        alignItems:'center'
        //marginLeft:10
    },
    text:{
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color:'green'
    },
    btn:{
        backgroundColor:'#EF1457',
        width:160,
        marginTop:30,
        borderRadius: 10,
        //marginLeft:70,
        padding:8 
    },
    btnCancel:{
        backgroundColor:'green',
        width:160,
        marginTop:30,
        borderRadius: 10,
        //marginLeft:70,
        padding:8 
    },
    textBtn:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
    },
    formInput:{
        color:'black',
        marginTop:15,
        width:200 ,
        //marginLeft: 50,
        fontSize: 34,
        textAlign:'center'
    }
})