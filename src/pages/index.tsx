import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IdCardLanyard, IdCard  } from 'lucide-react-native';

export default function TelaBoasVindas() {
  return (
    <View style={styles.container}>
        <IdCard  size={120} color='purple'/>    
        <View>
            <Text style={styles.title}>DevCard</Text>
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
  },
  title:{
    color: 'purple',
    fontSize: 100,
    fontFamily: 'Helvetica',
    marginTop: -20
  },
  subtitle:{
    fontSize:20
  },
  buttonContainer:{
    padding: 15,
    backgroundColor:'purple',
    marginTop:80,
    borderRadius: 10,
  },
  buttonText:{
    color:'white',
    fontSize: 25
    
  }

});
