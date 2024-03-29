import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors} from '../utils/colors';

import ServiceItem from './ServiceItem';

const Services = ({data, loading, navigation, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Services</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.seeMore}>See All</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.dentalGreen} />
        </View>
      ) : (
        <View style={styles.items}>
          {data.map(item => (
            <ServiceItem key={item.id} item={item} navigation={navigation} />
          ))}
        </View>
      )}
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    color: colors.black,
    fontFamily: Platform.OS === 'ios' ? 'ProductSans-Bold' : 'ProductSansBold',
  },
  seeMore: {
    color: colors.darkGrey,
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'ProductSans-Bold' : 'ProductSansBold',
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('30%'),
  },
});
