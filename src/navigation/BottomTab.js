import {Platform, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BottomBar from '../components/BottomBar.js';

import {colors} from '../utils/colors';

import screens from '../screens';

import bottomBarConfig from './config';

const BottomBarNav = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <BottomBarNav.Navigator
      initialRouteName={bottomBarConfig.Dashboard.screenName}
      tabBar={props => {
        return <BottomBar {...props} />;
      }}>
      {Object.values(bottomBarConfig).map(bottomBar => (
        <BottomBarNav.Screen
          key={bottomBar.screenName}
          component={screens[bottomBar.screenName]}
          name={bottomBar.screenName}
          options={{headerShown: bottomBar.headerShown}}
        />
      ))}
    </BottomBarNav.Navigator>
  );
};

export default BottomTab;
