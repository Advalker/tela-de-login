import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';


export default function App() {
  return (
    <KeyboardAvoidingView style={style.background}>

      <View style={style.containerLogo}>
        <Image source={require("./src/assets/logo3.png")}/>
      </View>

      <View style={style.container}>
        <TextInput
        style={style.input}
        placeholder='Email'
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput
        style={style.input}
        placeholder='Senha'
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TouchableOpacity style={style.btnSubmit}>
          <Text style={style.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnRegister}>
          <Text style={style.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}


const style = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  containerLogo:{
    flex:1,
    justifyContent: 'center',
  },

  container:{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
    paddingLeft: 20,
    
  },
  input:{
    backgroundColor: '#d2d2d2',
    width: '90%',
    marginBottom: 15,
    color: '#010',
    fontSize:17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit:{
      backgroundColor: '#35aaff',
      width: '90%',
      height:45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7, 
  },

  submitText:{
    color: '#fff',
    fontSize: 18,
  },

  btnRegister:{
    marginTop:10,
    alignItems: 'center',
  },
  
  registerText:{
    color:'#000',
    

  }

});


