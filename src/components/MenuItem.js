import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const MenuItem = ({title, type, onPress}) => {
  const renderIcon = type => {
    switch (type) {
      case 'doctor':
        return require('../assets/images/heart2.png');
      case 'clinic':
        return require('../assets/images/dental-clinic.png');
      case 'discount':
        return require('../assets/images/discount.png');
    }
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FastImage
        style={styles.imageStyle}
        source={renderIcon(type)}
        resizeMode="contain"
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
    color: '#333',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
