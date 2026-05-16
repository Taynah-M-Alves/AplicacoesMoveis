import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { router, useLocalSearchParams } from 'expo-router';

export default function TelaPreview() {
  const {
    nome,
    cargo,
    empresa,
    anos,
    tecnologia,
    cor,
  } = useLocalSearchParams<{
    nome: string;
    cargo: string;
    empresa: string;
    anos: string;
    tecnologia: string;
    cor: string;
  }>();

  function corCartao() {
    switch (cor) {
      case 'Azul':
        return '#3B82F6';

      case 'Verde':
        return '#22C55E';

      default:
        return '#7E22CE';
    }
  }

  function nivelDev() {
    const anosNumero = Number(anos);

    if (anosNumero <= 2) {
      return {
        nivel: 'Júnior',
        cor: '#9CA3AF',
      };
    }

    if (anosNumero <= 5) {
      return {
        nivel: 'Pleno',
        cor: '#3B82F6',
      };
    }

    return {
      nivel: 'Sênior',
      cor: '#D4AF37',
    };
  }

  const nivel = nivelDev();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preview do Cartão</Text>

      <View
        style={[
          styles.card,
          {
            backgroundColor: corCartao(),
          },
        ]}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {nome?.charAt(0)}
          </Text>
        </View>

        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.cargo}>
          {cargo} {empresa ? `• ${empresa}` : ''}
        </Text>

        <Text style={styles.tecnologia}>
          Especialista em {tecnologia}
        </Text>

        <View
          style={[
            styles.badge,
            {
              backgroundColor: nivel.cor,
            },
          ]}
        >
          <Text style={styles.badgeText}>
            {nivel.nivel}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonSecondaryText}>
          Editar dados
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/sucesso')}
      >
        <Text style={styles.buttonText}>
          Finalizar
        </Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5FF',
    justifyContent: 'center',
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5A189A',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 999,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  avatarText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#240046',
  },

  nome: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 8,
  },

  cargo: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 15,
    textAlign: 'center',
  },

  tecnologia: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 20,
  },

  badge: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  badgeText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  buttonSecondary: {
    backgroundColor: '#E9D5FF',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonSecondaryText: {
    color: '#5A189A',
    fontWeight: 'bold',
    fontSize: 18,
  },

  button: {
    backgroundColor: '#5A189A',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});