import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../utils/colors';

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
  inputRef,
  onSubmitEditing = () => {},
  keyboardType = '',
}) => {
  return (
    <>
      <Text style={[styles.text_footer, textStyle]}>{title}</Text>
      <View style={styles.action}>
        {iconMode === 'Feather' ? (
          <Feather color={colors.darkBlue} name={iconName} size={20} />
        ) : iconMode === 'MaterialCommunityIcons' ? (
          <MaterialCommunityIcons
            color={colors.darkBlue}
            name={iconName}
            size={20}
          />
        ) : (
          <FontAwesome color={colors.darkBlue} name={iconName} size={20} />
        )}
        <TextInput
          autoCapitalize="none"
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          style={[styles.textInput, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          onSubmitEditing={onSubmitEditing}
          ref={inputRef}
          keyboardType={keyboardType}
        />
        {isValid && (
          <Animatable.View animation="bounceIn">
            <Feather color="green" name="check-circle" size={20} />
          </Animatable.View>
        )}
        {isPassword && (
          <TouchableOpacity
            style={{marginLeft: 15}}
            onPress={() => updateSecureTextEntry(!secureTextEntry)}>
            {secureTextEntry ? (
              <Feather color="grey" name="eye-off" size={20} />
            ) : (
              <Feather color="grey" name="eye" size={20} />
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
    fontFamily: Platform.OS === 'ios' ? 'ProductSans-Bold' : 'ProductSansBold',
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
