import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';

import FastImage from 'react-native-fast-image';

const MenuItem = ({title, type, onPress}) => {
  const renderIcon = type => {
    switch (type) {
      case 'doctor':
        return require('../assets/images/heart2.png');
      case 'clinic':
        return require('../assets/images/clinic-1.png');
      case 'discount':
        return require('../assets/images/discount.png');
    }
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FastImage
        resizeMode="contain"
        source={renderIcon(type)}
        style={styles.imageStyle}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageStyle: {width: 50, height: 50},
  title: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'ProductSans-Bold' : 'ProductSansBold',
    color: '#333',
    marginTop: 5,
  },
});
