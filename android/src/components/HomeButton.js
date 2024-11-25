import { StyleSheet, Text, TouchableHighlight} from 'react-native';

export default function HomeButton({route, label}) {
  return (
    <>
      <TouchableHighlight
          style={styles.button}
          underlayColor={'darkgray'}
          onPress={() => navigation.navigate(route)}
        >
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableHighlight>
    </>
  )
}

const styles = StyleSheet.create({
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
