import React, {memo} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Services from '../../components/Services';

const DashboardView = props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <Header
        enabled={props.notificationsEnabled}
        user={props.user}
        onNotificationPress={props.onNotificationPress}
      />
      <View style={styles.dashboardContainer}>
        <Menu navigation={props.navigation} />
        <Services
          data={props.servicesData}
          loading={props.servicesLoading}
          navigation={props.navigation}
          onPress={props.seeAllServices}
        />
      </View>
    </ScrollView>
  );
};

export default memo(DashboardView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dashboardContainer: {
    paddingHorizontal: wp('4%'),
  },
});
