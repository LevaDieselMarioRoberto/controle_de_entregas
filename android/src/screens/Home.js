import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export function Home({navigation}) {

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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: 'darkred',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  }
});
