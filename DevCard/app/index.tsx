import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { router } from 'expo-router';

export default function TelaBoasVindas() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Image
          source={require('../assets/logo_sem_fundo.png')}
          style={styles.image}
        />

        {/* <Text style={styles.title}>DevCard</Text> */}

        <Text style={styles.subtitle}>
          Seu cartão de visita digital de dev mobile
        </Text>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => router.push('/cadastro')}
        >
          <Text style={styles.buttonText}>
            Criar meu cartão
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  image: {
    width: 220,
    height: 180,
    marginBottom: 10,
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#5A189A',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 35,
    lineHeight: 25,
  },

  buttonContainer: {
    width: '100%',
    backgroundColor: '#5A189A',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    paddingHorizontal: 14,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});