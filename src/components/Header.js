import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../utils/colors';

const Header = ({user, onNotificationPress, onLocationPress, enabled}) => {
  return (
    <LinearGradient colors={[colors.dentalGreen, colors.dentalGreen]}>
      <View style={styles.container}>
        <View style={styles.wrapperContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome back,</Text>
            <Text style={styles.subtitle}>
              {user.firstname} {user.lastname}
            </Text>
          </View>
          <TouchableOpacity
            style={{paddingTop: 8}}
            onPress={onNotificationPress}>
            <Icon
              color={colors.white}
              name={enabled ? 'bell' : 'bell-outline'}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.location}>
          <View style={styles.titleContainer}>
            <TouchableOpacity
              style={styles.clinicLocation}
              onPress={onLocationPress}>
              <Icon
                color={colors.white}
                name="map-marker-radius-outline"
                size={24}
              />
              <Text style={styles.locationText}>Minsk, ul. Lamonosova, 25</Text>
            </TouchableOpacity>
            <Text style={styles.tip}>Choose your nearest clinic</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: hp('10%'),
    paddingHorizontal: '4%',
  },
  wrapperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontFamily: Platform.OS === 'ios' ? 'ProductSans-Bold' : 'ProductSansBold',
    color: colors.white,
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'column',
  },
  subtitle: {
    color: colors.white,
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'ProductSans-Bold' : 'ProductSansBold',
  },
  location: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clinicLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp('1%'),
  },
  locationText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'ProductSans-Bold' : 'ProductSansBold',
    marginLeft: 10,
  },
  tip: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
  },
});
