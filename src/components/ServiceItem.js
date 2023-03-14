import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors} from '../utils/colors';

const ServiceItem = ({item, navigation}) => {
  const onPressItem = () => {
    navigation.navigate('Service', {
      serviceId: item.id,
    });
  };
  return (
    <View key={item.id} style={styles.item}>
      <TouchableOpacity onPress={onPressItem}>
        <FastImage
          resizeMode="cover"
          source={require('../assets/images/03.png')}
          style={styles.imageStyle}
        />
        <View style={styles.imageText}>
          <Text style={styles.serviceName}>{item.name}</Text>
          <Text style={styles.quantity}>
            {item.quantityOfSpecialists} specialists
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceItem;

const styles = StyleSheet.create({
  item: {
    width: '46%',
    minHeight: 50,
    position: 'relative',
    marginBottom: 20,
  },
  imageStyle: {
    width: '100%',
    minHeight: 100,
    borderRadius: 10,
  },
  imageText: {
    flexDirection: 'column',
    elevation: 10,
    position: 'absolute',
    paddingLeft: wp('4%'),
    paddingTop: hp('1%'),
  },
  serviceName: {
    fontSize: 14,
    color: colors.white,
  },
  quantity: {
    fontSize: 12,
    color: colors.white,
  },
});
