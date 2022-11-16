import React, {memo, useRef} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Animated,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {screenHeight} from '../../utils/func';
import {colors} from '../../utils/colors';

const SubcatalogView = props => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const ITEM_SIZE = screenHeight / 7;

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title={props.type} />
      <Animated.FlatList
        contentContainerStyle={{marginTop: 16}}
        data={props.data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputScaleRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const outputScaleRange = [1, 1, 1, 0];
          const scale = scrollY.interpolate({
            inputRange: inputScaleRange,
            outputRange: outputScaleRange,
          });
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.5),
          ];
          const opacityOutputRange = [1, 1, 1, 0];
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: opacityOutputRange,
          });
          return (
            <Animated.View
              style={[
                styles.listItemContainer,
                {transform: [{scale: scale}], opacity: opacity},
              ]}>
              <>
                <Text style={styles.serviceName}>{item.name}</Text>
                <View style={styles.infoContainer}>
                  <View style={styles.specialistsOverview}>
                    <Text style={styles.specText}>
                      Quantity of available specialists:{' '}
                    </Text>
                    <Text style={styles.specQuantity}>
                      {item.quantityOfSpecialists}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.moreInfoContainer}>
                    <Text style={styles.moreInfoText}>More info</Text>
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={18}
                      color={colors.darkGrey}
                    />
                  </TouchableOpacity>
                </View>
              </>
            </Animated.View>
          );
        }}
        onEndReached={props.loadMore}
      />
      {props.loading && (
        <ActivityIndicator
          style={styles.loadingWrapper}
          size={24}
          color={colors.himmelBlau}
        />
      )}
    </SafeAreaView>
  );
};

export default memo(SubcatalogView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('4%'),
    marginVertical: Platform.OS === 'android' ? hp('4%') : 0,
  },
  loadingWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  listItemContainer: {
    width: wp('92%'),
    backgroundColor: colors.himmelBlau,
    marginBottom: 16,
    borderRadius: 10,
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  serviceName: {
    color: colors.white,
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'ProductSans-Bold' : 'ProductSansBold',
    marginBottom: 16,
  },
  specialistsOverview: {
    flexDirection: 'row',
  },
  specText: {
    marginRight: 4,
    color: colors.white,
  },
  specQuantity: {
    color: colors.white,
    fontSize: 14,
  },
  moreInfoContainer: {
    flexDirection: 'row',
  },
  moreInfoText: {
    color: colors.white,
  },
});
