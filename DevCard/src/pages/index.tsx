import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { IdCardLanyard, IdCard  } from 'lucide-react-native';

export default function TelaBoasVindas() {
  return (
    <View style={styles.container}>
        <Image 
          source={require('../../assets/logo_sem_fundo.png')}
          style={styles.image}
        />  
        <View>
            {/* <Text style={styles.title}>DevCard</Text> */}
            <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
        </View>  
        
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Criar meu cartão</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
   image:{
    width: 350,
    height: 280,
  },
  title:{
    color: 'purple',
    fontSize: 100,
    fontFamily: 'Helvetica',
  },
  subtitle:{
    maxWidth:250,
    fontSize:20,
    textAlign: 'center'
  },
  buttonContainer:{
    padding: 15,
    backgroundColor:'#3C096C',
    marginTop:40,
    borderRadius: 10,
  },
  buttonText:{
    color:'rgb(255, 255, 255)',
    fontSize: 25
    
  }

});
