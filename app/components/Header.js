import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default class Header extends React.Component {
   
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.header_text}>{this.props.type +' - LEVEL '+ this.props.level}</Text>
      </View>
    );
  }
 
}
 
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 5, 
    backgroundColor: '#EF1457'
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    color:'white'
  }
});