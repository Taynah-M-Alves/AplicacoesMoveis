import { StatusBar } from 'expo-status-bar';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import { BookmarkCheck } from 'lucide-react-native';
import { router } from 'expo-router';

export default function TelaSucesso() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <View style={styles.iconContainer}>
          <BookmarkCheck size={70} color={"#22C55E"} />
        </View>

        <Text style={styles.title}>
          Cartão criado!
        </Text>

        <Text style={styles.description}>
          Seu cartão digital foi criado com sucesso.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.buttonText}>
            Criar outro cartão
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
    padding: 30,
    borderRadius: 24,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },

  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 999,
    backgroundColor: '#DCFCE7',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 25,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#240046',
    marginBottom: 10,
  },

  description: {
    fontSize: 18,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    width: '100%',
    backgroundColor: '#5A189A',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});