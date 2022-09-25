import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {colors} from '../utils/colors';

const Button = ({onPress, text, name, color, size}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
        <Text style={styles.textSign}>{text}</Text>
        <MaterialIcons color={color} name={name} size={size} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  signIn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
