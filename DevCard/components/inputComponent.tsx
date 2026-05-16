import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, StyleSheet } from 'react-native';


interface InputProps{
  labelProp: string;
  placeholderProp:string;
  keyboardTypeProp: any;
  isPassword: boolean;
  onChangeText: any;
}

export function Input({labelProp, placeholderProp, keyboardTypeProp, isPassword, onChangeText}:InputProps) {
  
  let secureTextProp:boolean = false
  if (isPassword) {
     secureTextProp = true
  }else{
    secureTextProp =false
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>{labelProp}:</Text>
        <TextInput
        placeholder= {placeholderProp}
        style ={styles.input}
        keyboardType={keyboardTypeProp}
        secureTextEntry = {secureTextProp} 
        onChangeText={onChangeText}/>

      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    width:400,
    alignItems:'center',
    flexDirection: 'column',
    gap: 8,
  },
  label:{
    width: '80%',
    alignItems:'flex-start',
    paddingLeft:6,
    fontSize: 20
  },
  input:{ 
    width:'80%',
    borderRadius: 18,
    borderWidth:2,
    borderColor:'Black',
    alignSelf: 'center',
    fontSize: 20,
    paddingLeft: 16,
    marginBottom:10,
  }
})