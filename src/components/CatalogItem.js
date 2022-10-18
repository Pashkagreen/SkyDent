import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../utils/colors';

const CatalogItem = ({title, description, addition, image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#08d4c4', '#01ab9d']}
        style={styles.categoryItem}>
        <View style={styles.categoryInfo}>
          <View>
            <Text style={styles.categoryTitle}>{title}</Text>
          </View>
          <View>
            <Text style={styles.categoryDescription}>{description}</Text>
            <Text style={styles.categoryAdditions}>{addition}</Text>
          </View>
        </View>
        <View style={styles.categoryImage}>
          <FastImage
            source={image}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CatalogItem;

const styles = StyleSheet.create({
  categoryItem: {
    width: '100%',
    height: hp('20%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    marginBottom: 20,
  },
  categoryInfo: {
    width: '55%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  categoryImage: {
    width: '40%',
  },
  imageStyle: {
    width: '100%',
    height: 150,
  },
  categoryTitle: {
    color: colors.white,
    fontSize: 26,
    fontWeight: 'bold',
  },
  categoryDescription: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  categoryAdditions: {
    color: colors.white,
    fontSize: 12,
  },
});
