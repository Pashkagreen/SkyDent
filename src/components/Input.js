import {colors} from '../utils/colors';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const Input = ({
  title = '',
  iconName = '',
  iconMode = '',
  placeholder = '',
  placeholderTextColor = '',
  inputStyle = {},
  textStyle = {},
  onChangeText = () => {},
  onEndEditing = () => {},
  errorMessage = '',
  isValid = false,
  value,
  isPassword = false,
  updateSecureTextEntry = () => {},
  secureTextEntry = false,
}) => {
  return (
    <>
      <Text style={[styles.text_footer, textStyle]}>{title}</Text>
      <View style={styles.action}>
        {iconMode === 'Feather' ? (
          <Feather name={iconName} color={colors.darkBlue} size={20} />
        ) : (
          <MaterialCommunityIcons
            name={iconName}
            color={colors.darkBlue}
            size={20}
          />
        )}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={[styles.textInput, inputStyle]}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          value={value}
        />
        {isValid && (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        )}
        {isPassword && (
          <TouchableOpacity
            onPress={() => updateSecureTextEntry(!secureTextEntry)}
            style={{marginLeft: 15}}>
            {secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {!!errorMessage && (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>{errorMessage}</Text>
        </Animatable.View>
      )}
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  text_footer: {
    color: colors.darkBlue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.errorRed,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: colors.darkBlue,
    fontSize: 14,
  },
  errorMsg: {
    color: colors.errorRed,
    fontSize: 14,
  },
});
