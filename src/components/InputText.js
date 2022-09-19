import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {transparent} from 'react-native-paper/lib/typescript/styles/colors';
import {Colors} from '../utils/colors';

const Input = ({
  inputRef,
  value = '',
  placeholder = 'placeholder',
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  onSubmitEditing = () => {},
  inputStyle = {},
  placeholderTextColor = Colors.darkGrey,
  keyboardType = 'default',
  inputStyles = {},
  blurOnSubmit = false,
  returnKeyType = 'next',
  autoFocus = false,
}) => {
  return (
    <View style={{...inputStyles}}>
      <TextInput
        ref={inputRef}
        keyboardType={keyboardType}
        blurOnSubmit={blurOnSubmit}
        returnKeyType={returnKeyType}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onSubmitEditing={onSubmitEditing}
        placeholderTextColor={placeholderTextColor}
        autoFocus={autoFocus}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default Input;
