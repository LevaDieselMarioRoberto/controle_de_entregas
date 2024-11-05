import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export function Home({navigation}) {

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <TouchableHighlight
        style={styles.button}
        underlayColor={'#ccc'}
        onPress={() => navigation.navigate('Nova Entrega')}
      >
        <Text style={styles.buttonText}>Viagem</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.button}
        underlayColor={'#ccc'}
        // onPress={() => navigation.navigate('')}
      >
        <Text style={styles.buttonText}>Abastecimento</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.button}
        underlayColor={'#ccc'}
        // onPress={() => navigation.navigate('')}
      >
        <Text style={styles.buttonText}>Carregamento</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.button}
        underlayColor={'#ccc'}
        // onPress={() => navigation.navigate('')}
      >
        <Text style={styles.buttonText}>Transferência</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.button}
        underlayColor={'#ccc'}
        // onPress={() => navigation.navigate('')}
      >
        <Text style={styles.buttonText}>Localizações</Text>
      </TouchableHighlight>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  button: {
    backgroundColor: 'darkgray',
    padding: 20,
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'darkred',
    borderWidth: 5,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  }
});
