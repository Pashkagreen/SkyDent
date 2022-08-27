import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screens from '../screens';
import {StyleSheet} from 'react-native';
import {Colors} from '../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
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
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
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
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
