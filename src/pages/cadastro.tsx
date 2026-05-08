import { StatusBar } from 'expo-status-bar';
import {  Text, TouchableOpacity, View, ScrollView,KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import {Input} from '../components/inputComponent'


export function TelaCadastro() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <Image 
          source={require('../../../../assets/logo.jpeg')}
          style={styles.image}
        /> */}

        <View>
          <Input
          labelProp='Nome Completo'
          placeholderProp='Digite seu nome completo'
          keyboardTypeProp= 'default'
          isPassword= {false} />

          <Input
          labelProp='Cargo'
          placeholderProp='Digite seu CPF'
          keyboardTypeProp= 'numeric'
          isPassword= {false}/>

          <Input
          labelProp='Empresa'
          placeholderProp='Digite seu email'
          keyboardTypeProp= 'email-address'
          isPassword= {false}/>

          <Input
          labelProp='Anos de Experie^ncia'
          placeholderProp='Digite uma senha'
          keyboardTypeProp= 'default'
          isPassword= {true}/>

          <Input
          labelProp='Confirmar Senha'
          placeholderProp='Digite a mesma senha'
          keyboardTypeProp= 'default'
          isPassword= {true}/>

          <Text style={styles.tenhoLogin}>Já tem uma conta? <Text style={styles.LoginLink}>Login</Text></Text>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Cadastrar</Text>
          </TouchableOpacity>

        </View>
        

      <StatusBar style="auto" />
    </ScrollView >
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 500,
    height: 300,
  },
  tenhoLogin:{
    fontSize:20,
    alignSelf:'center',
    fontWeight:'600'
  },
  LoginLink:{
    color:'#d47c2f',
  },
  button:{
    backgroundColor:'#2e6693',
    width: 300,
    alignSelf:'center',
    marginTop:18,
    alignItems:'center',
    padding: 10,
    borderRadius:10,
    elevation: 6,
    shadowColor:'black',
    marginBottom: 26,
  },
  buttonLabel:{
    fontSize:22,
    color:'#fff'
  }})