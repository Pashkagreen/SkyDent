import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../utils/colors';

const Button = ({onPress, text, name, color, size}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
        <Text style={styles.textSign}>{text}</Text>
        <MaterialIcons name={name} color={color} size={size} />
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
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
