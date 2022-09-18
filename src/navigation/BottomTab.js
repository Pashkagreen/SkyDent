import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screens from '../screens';
import {Colors} from '../utils/colors';
import {
  Animated,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRef} from 'react';
import {useGetWidthForTabs} from '../utils/func';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: styles.tabs,
          tabBarActiveTintColor: Colors.blue,
          tabBarInactiveTintColor: Colors.paleGreen,
        }}>
        <Tab.Screen
          name="Dashboard"
          component={screens.Dashboard}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Catalog"
          component={screens.Catalog}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="clipboard-search"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Appointment"
          component={screens.Appointment}
          options={{
            tabBarIcon: ({color, size}) => (
              <TouchableOpacity>
                <View style={styles.mainTab}>
                  <MaterialCommunityIcons
                    name="plus-circle"
                    color={color}
                    size={60}
                  />
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={screens.History}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="clipboard-text-clock"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={screens.Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 5,
    marginHorizontal: 5,
    // Max Height...
    height: 60,
    borderRadius: 10,
    // Shadow...
    shadowColor: Colors.lightGrey,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  mainTab: {
    width: 60,
    height: 60,
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS == 'android' ? 40 : 30,
  },
});
