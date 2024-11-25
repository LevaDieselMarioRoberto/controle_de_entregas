import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HomeButton, Footer } from '../components/';

export default function Home({navigation}) {

  return (
    <>
      <StatusBar style="auto" />

      <View style={styles.container}>
        <HomeButton route='Nova Entrega' label='Viagem' />
        <HomeButton route='' label='Abastecimento' />
        <HomeButton route='' label='Carregamento' />
        <HomeButton route='' label='Transferência' />
        <HomeButton route='' label='Localizações' />
      </View>

      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 'auto',
    gap: 20,
  }
});
