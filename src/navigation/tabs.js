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
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Catalog" component={screens.Catalog} />
      <Tab.Screen name="Appointment" component={screens.Appointment} />
      <Tab.Screen name="History" component={screens.History} />
      <Tab.Screen name="Profile" component={screens.Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
