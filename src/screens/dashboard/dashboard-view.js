import React, {memo} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Services from '../../components/Services';

const DashboardView = props => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Header
        user={props.user}
        onNotificationPress={props.onNotificationPress}
        enabled={props.notificationsEnabled}
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
