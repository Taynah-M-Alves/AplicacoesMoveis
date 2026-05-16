import { StatusBar } from 'expo-status-bar';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react'
import { Input } from '../components/inputComponent';
import { router } from 'expo-router';

export default function TelaCadastro() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anos, setAnos] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState('Roxo');

  const [erroNome, setErroNome] = useState('');
  const [erroCargo, setErroCargo] = useState('');
  const [erroAnos, setErroAnos] = useState('');
  const [erroTecnologia, setErroTecnologia] = useState('');

  function validar() {
    let valido = true;

    setErroNome('');
    setErroCargo('');
    setErroAnos('');
    setErroTecnologia('');

    if (nome.trim().length < 3) {
      setErroNome('Nome deve ter no mínimo 3 caracteres');
      valido = false;
    }

    if (!cargo.trim()) {
      setErroCargo('Cargo obrigatório');
      valido = false;
    }

    if (!anos || Number(anos) <= 0) {
      setErroAnos('Informe um número maior que 0');
      valido = false;
    }

    if (!tecnologia.trim()) {
      setErroTecnologia('Tecnologia obrigatória');
      valido = false;
    }

    if (valido) {
      router.push({
        pathname: '/preview',
        params: {
          nome,
          cargo,
          empresa,
          anos,
          tecnologia,
          cor,
        },
      });
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.title}>DevCard</Text>

        <Input
          labelProp="Nome Completo"
          placeholderProp="ex: Taynah Alves"
          keyboardTypeProp="default"
          isPassword={false}
          onChangeText={setNome}
        />

        {erroNome ? <Text style={styles.error}>{erroNome}</Text> : null}

        <Input
          labelProp="Cargo"
          placeholderProp="ex: Desenvolvedor Junior"
          keyboardTypeProp="default"
          isPassword={false}
          onChangeText={setCargo}
        />

        {erroCargo ? <Text style={styles.error}>{erroCargo}</Text> : null}
        <Input
          labelProp="Empresa"
          placeholderProp="ex: iFood"
          keyboardTypeProp="default"
          isPassword={false}
          onChangeText={setEmpresa}
        />

        <Input
          labelProp="Anos de Experiência"
          placeholderProp="ex: 2"
          keyboardTypeProp="numeric"
          isPassword={false}
          onChangeText={setAnos}
        />
        {erroAnos ? <Text style={styles.error}>{erroAnos}</Text> : null}


        <Input
          labelProp="Tecnologia Favorita"
          placeholderProp="ex: React Native"
          keyboardTypeProp="default"
          isPassword={false}
          onChangeText={setTecnologia}
        />
        {erroTecnologia ? (
            <Text style={styles.error}>{erroTecnologia}</Text>
          ) : null}

        <Text style={styles.label}>Cor do cartão:</Text>

        <View style={styles.colorContainer}>

          <TouchableOpacity
              onPress={() => setCor('Azul')}
              style={[
                styles.colorButton,
                {
                  backgroundColor: '#3B82F6',
                  borderWidth: cor === 'Azul' ? 3 : 0,
                },
              ]}
            >
              <Text style={styles.colorText}>Azul</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCor('Verde')}
              style={[
                styles.colorButton,
                {
                  backgroundColor: '#22C55E',
                  borderWidth: cor === 'Verde' ? 3 : 0,
                },
              ]}
            >
              <Text style={styles.colorText}>Verde</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCor('Roxo')}
              style={[
                styles.colorButton,
                {
                  backgroundColor: '#7E22CE',
                  borderWidth: cor === 'Roxo' ? 3 : 0,
                },
              ]}
            >
              <Text style={styles.colorText}>Roxo</Text>
            </TouchableOpacity>
          

          
        </View>

        <TouchableOpacity style={styles.button} onPress={validar}>
          <Text style={styles.buttonLabel}>Gerar Cartão</Text>
        </TouchableOpacity>

        <StatusBar style="light" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#3C096C',
    marginBottom: 30,
  },

  label: {
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    color: '#240046',
  },

  error: {
    color: '#DC2626',
    marginBottom: 10,
  },

  colorContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 30,
  },

  colorButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  colorText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  button: {
  backgroundColor: '#5A189A',
  width: '100%',
  alignItems: 'center',
  padding: 18,
  borderRadius: 18,
  marginTop: 15,
},
  buttonLabel: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});