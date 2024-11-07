import { Image } from 'react-native';

const LogoLevaDiesel = require('../assets/levadiesel.png')

export default function Header() {
  return (
    <Image source={LogoLevaDiesel} style={styles.image} />
  );
}

const styles = {
  image: {
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
};
