import { StatusBar } from 'expo-status-bar';
import React ,{ useState }from 'react';
import { StyleSheet , Text, View,Image, TextInput,TouchableOpacity, ScrollView} from 'react-native';

export default function Login({navigation}) {
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    
    const goLogin = () => {
        if(username.trim() === 'quy' && password.trim() === '123') {
            return navigation.navigate('HomeScreen');
        }

         alert('Tài khoản hoặc mật khẩu không chính xác.')
    }
  return (
    <View style={styles.container}>
        
      <Image style={styles.imgLogo} source={require('../../src/img/logoThuongHieu.png')}/>
      <Text style={{color:'#000',fontSize:35,marginTop:0}}>LOGIN</Text>
      <TextInput 
      value={username}
      onChangeText={text => setUsername(text)}
      style={[styles.textInput,{marginTop:20}]} placeholder='Username'></TextInput>
      <TextInput 
      value={password}
      secureTextEntry={true}
      onChangeText={text => setPassword(text)}
      style={[styles.textInput,{marginTop:20}]} placeholder='Password'></TextInput>
      <TouchableOpacity

        style={[styles.buttonLogin,{marginTop:40}]} 
        onPress={goLogin}>
        <Text style={{fontSize:20,color:'#000'}}>Login</Text>
      </TouchableOpacity>
      
      
    </View>
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
    borderColor:'red',
    borderRadius:25,
    textAlign:'center',
    backgroundColor:'#ff0'
  },
  buttonLogin:{
    width:150,
    height:50,
    borderWidth:1,
    borderColor:'green',
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f0f3'

  }
});
