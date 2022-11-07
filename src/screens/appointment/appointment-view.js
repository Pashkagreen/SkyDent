import React, {
  memo,
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import {
  StyleSheet,
  Animated,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import * as Animatable from 'react-native-animatable';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../../utils/colors';
import ActivityButton from '../../components/ActivityButton';
import SelectService from './components/SelectService';
import SelectTime from './components/SelectTime';
import Overview from './components/Overview';
import {screenWidth} from '../../utils/func';

const AppointmentView = props => {
  const mainRef = useRef(null);
  const stepRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [itemsIndex, setItemsIndex] = useState(0);

  const [onScrollIndex, setOnScrollIndex] = useState(0);

  const onPress = () => {
    if (index === 3) {
      return;
    } else {
      setIndex(index => index + 1);
      setItemsIndex(index => index + 1);
    }
  };

  useEffect(() => {
    stepRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
    mainRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  }, [index, itemsIndex]);

  useEffect(() => {
    if (onScrollIndex === 0 || onScrollIndex === 1 || onScrollIndex === 2) {
      setIndex(onScrollIndex);
      setItemsIndex(onScrollIndex);
    }
  }, [onScrollIndex]);

  return (
    <Animatable.View style={styles.container} animation="fadeInUpBig">
      <ScreenHeader title="New Appointment" />
      <FlatList
        ref={stepRef}
        contentContainerStyle={{height: hp('5%')}}
        initialScrollIndex={index}
        data={props.tabs}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item, index: fIndex}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setIndex(fIndex);
                setItemsIndex(fIndex);
              }}>
              <View
                style={[
                  styles.stepContainer,
                  {
                    backgroundColor:
                      fIndex === index ? colors.himmelBlau : 'transparent',
                  },
                ]}>
                <Text
                  style={[
                    styles.stepText,
                    {color: fIndex === index ? colors.white : colors.lightGrey},
                  ]}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <FlatList
        ref={mainRef}
        contentContainerStyle={{height: hp('68%')}}
        initialScrollIndex={itemsIndex}
        horizontal
        data={props.tabs}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.step}
        scrollEventThrottle={2000}
        onScroll={event => {
          setOnScrollIndex(
            Math.round(event.nativeEvent.contentOffset.x / screenWidth),
          );
        }}
        renderItem={({item}) => {
          if (item.step === 1) return <SelectService {...props} />;
          if (item.step === 2) return <SelectTime {...props} />;
          if (item.step === 3) return <Overview {...props} />;
        }}
      />
      <ActivityButton
        containerStyle={styles.button}
        main={false}
        text="Continue"
        type="primary"
        onPress={onPress}
      />
    </Animatable.View>
  );
};

export default memo(AppointmentView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? hp('4%') : 0,
    marginHorizontal: wp('4%'),
  },
  title: {
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    color: colors.black,
  },
  step: {},
  stepContainer: {
    marginRight: 20,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  stepText: {
    color: colors.lightGrey,
    fontSize: 18,
  },
  button: {
    marginBottom: 20,
  },
});
