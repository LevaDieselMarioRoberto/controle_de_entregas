import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Input({label, value, setValue, inputMode, multiline, onFocus }) {
  return (
    <TextInput
      style={styles.input}
      mode='outlined'
      label={label}
      value={value}
      onChangeText={value => setValue(value)}
      selectionColor={styles.color}
      activeUnderlineColor={styles.color}
      outlineColor={styles.color}
      activeOutlineColor={styles.color}
      cursorColor={styles.color}
      inputMode={inputMode ? inputMode : 'text'}
      multiline={multiline ? multiline : false}
      numberOfLines={multiline ? 4 : 1}
      onFocus={onFocus ? onFocus : () => {}}
    />
  );
}

const styles = StyleSheet.create({
  color: 'grey',
  input: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});
