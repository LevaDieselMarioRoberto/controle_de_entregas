import { Image } from 'react-native';
import { Text } from 'react-native-paper';

const LogoMarioRoberto = require('../assets/mario_roberto.png')

export default function Header() {
  return (
    <>
      <Image source={LogoMarioRoberto} style={styles.image} />
      <Text style={styles.text}>©2025 - Todos os direitos reservados</Text>
    </>
  );
}

const styles = {
  image: {
    width: '100%',
    height: 40,
    marginHorizontal: 'auto',
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 12,
    color: '#999',
  },
};
