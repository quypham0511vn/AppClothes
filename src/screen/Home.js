import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Button, View,Image, TextInput,TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
    const test=()=>{return navigation.navigate('LoginScreen')}

  return (
    <View style={styles.container}>
     <Text>home</Text>
     <Button onPress={test} title='login '></Button>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center'
    },
    })