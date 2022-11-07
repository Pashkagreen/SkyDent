import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

import {colors} from '../utils/colors';

const ServiceItem = ({item, navigation}) => {
  const onPressItem = () => {
    navigation.navigate('Service', {
      serviceId: item.id,
    });
  };
  return (
    <View style={styles.item} key={item.id}>
      <TouchableOpacity onPress={onPressItem}>
        <FastImage
          source={require('../assets/images/03.png')}
          resizeMode="cover"
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
