import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../utils/colors';
import ServiceItem from './ServiceItem';

const Services = ({data, loading, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Services</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.items}>
        {data.map(item => (
          <ServiceItem item={item} key={item.id} />
        ))}
      </View>
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
    fontWeight: 'bold',
  },
  seeMore: {
    color: colors.darkGrey,
    fontSize: 14,
    fontWeight: 'bold',
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
  },
});
