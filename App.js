import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TextInput,TouchableOpacity} from 'react-native';
import Navigation from './src/navigation'
export default function App() {
  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imgLogo:{
    width:200,
    height:200,
    marginTop:25,
    resizeMode:'contain'
  },
  textInput:{
    width:300,
    height:50,
    fontSize:20,
    borderWidth:1,
    borderRadius:25,
    textAlign:'center',
    backgroundColor:'#ff0'
  },
  buttonLogin:{
    width:150,
    height:50,
    borderWidth:1,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f0f3'

  }
});
