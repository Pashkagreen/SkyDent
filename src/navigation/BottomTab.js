import {Platform, StyleSheet, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomBar from '../components/BottomBar.js';

import {colors} from '../utils/colors';

import screens from '../screens';

const Tab = createBottomTabNavigator();

import bottomBarConfig from './config';

const BottomBarNav = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <BottomBarNav.Navigator
      initialRouteName={bottomBarConfig.Dashboard.screenName}
      // sceneContainerStyle={{backgroundColor: colors.white}}
      tabBar={props => {
        console.log('props', props);
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

// const BottomTab = () => {
//   return (
//     <>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarShowLabel: false,
//           headerShown: false,
//           tabBarStyle: styles.tabs,
//           tabBarActiveTintColor: colors.blue,
//           tabBarInactiveTintColor: colors.paleGreen,
//         }}>
//         <Tab.Screen
//           component={screens.Dashboard}
//           name="Dashboard"
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <MaterialCommunityIcons
//                 color={color}
//                 name="view-dashboard"
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           component={screens.Catalog}
//           name="Catalog"
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <MaterialCommunityIcons
//                 color={color}
//                 name="clipboard-search"
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           component={screens.Appointment}
//           name="Appointment"
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <View style={styles.mainTab}>
//                 <MaterialCommunityIcons
//                   color={color}
//                   name="plus-circle"
//                   size={60}
//                 />
//               </View>
//             ),
//           }}
//         />
//         <Tab.Screen
//           component={screens.History}
//           name="History"
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <MaterialCommunityIcons
//                 color={color}
//                 name="clipboard-text-clock"
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           component={screens.Profile}
//           name="Profile"
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <MaterialCommunityIcons
//                 color={color}
//                 name="account"
//                 size={size}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </>
//   );
// };

// export default BottomTab;
export default BottomTab;

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: colors.red,
    position: 'absolute',
    bottom: 5,
    marginHorizontal: 5,
    // Max Height...
    height: 60,
    borderRadius: 10,
    // Shadow...
    shadowColor: colors.lightGrey,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  mainTab: {
    width: 60,
    height: 60,
    backgroundColor: colors.backgroundGrey,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS == 'android' ? 40 : 30,
  },
});
