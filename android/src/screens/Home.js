import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Footer } from '../components/';

export default function Home({navigation}) {

  return (
    <>
      <StatusBar style="auto" />

      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          underlayColor={'darkgray'}
          onPress={() => navigation.navigate('Nova Entrega')}
        >
          <Text style={styles.buttonText}>Viagem</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          underlayColor={'darkgray'}
          // onPress={() => navigation.navigate('')}
        >
          <Text style={styles.buttonText}>Abastecimento</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          underlayColor={'darkgray'}
          // onPress={() => navigation.navigate('')}
        >
          <Text style={styles.buttonText}>Carregamento</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          underlayColor={'darkgray'}
          // onPress={() => navigation.navigate('')}
        >
          <Text style={styles.buttonText}>Transferência</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          underlayColor={'darkgray'}
          // onPress={() => navigation.navigate('')}
        >
          <Text style={styles.buttonText}>Localizações</Text>
        </TouchableHighlight>
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
  },
  button: {
    backgroundColor: '#b6272f',
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  }
});
