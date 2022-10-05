import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../utils/colors';

const ModalButton = ({
  text = '',
  disabled = false,
  containerStyle = {},
  textColor = '',
  loading = false,
  type = 'primary',
  onPress = () => {},
}) => {
  const styles = getStyles(disabled, type, textColor);

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      {loading ? (
        <LinearGradient
          colors={styles.container.backgroundColor}
          style={[styles.container, {borderWidth: 0}]}>
          <ActivityIndicator color={styles.container.color} />
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={styles.container.backgroundColor}
          style={[styles.container, {borderWidth: 0}]}>
          <Text style={[styles.textSign, {borderWidth: 0}]}>{text}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

const renderBtnStyles = (disabled, type) => {
  if (disabled) {
    return {
      color: colors.darkGrey,
      backgroundColor: [colors.backgroundGrey, colors.backgroundGrey],
    };
  }

  switch (type) {
    case 'primary':
      return {
        backgroundColor: ['#5496D7', '#2C5AB3'],
        color: colors.white,
      };
    case 'secondary':
      return {
        backgroundColor: ['transparent', 'transparent'],
        borderWidth: 1,
        borderColor: colors.himmelBlau,
        color: colors.himmelBlau,
      };
    default:
      console.warn('Укажите тип');
      return {
        backgroundColor: colors.dentalGreen,
        color: colors.white,
      };
  }
};

const getStyles = (disabled, type) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      height: 50,
      width: '100%',
      ...renderBtnStyles(disabled, type),
    },
    childs: {
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    textSign: {
      fontSize: 18,
      fontWeight: 'bold',
      ...renderBtnStyles(disabled, type),
    },
  });

export default ModalButton;
