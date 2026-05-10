import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaBoasVindas from "./src/pages/index"
import {TelaCadastro} from "./src/pages/cadastro"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TelaBoasVindas/> */}
      <TelaCadastro/>
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
});
