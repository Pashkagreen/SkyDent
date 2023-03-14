import {createStackNavigator} from '@react-navigation/stack';

import HeaderLeftButton from '../components/HeaderLeftButton';

import {colors} from '../utils/colors';

import screens from '../screens';
import BottomTab from './BottomTab';

const MainStackNav = createStackNavigator();

const MainStack = () => {
  return (
    <MainStackNav.Navigator
      initialRouteName="BottomTab"
      screenOptions={{headerShown: false}}>
      <MainStackNav.Screen component={BottomTab} name="BottomTab" />
      <MainStackNav.Screen
        component={screens.Service}
        name="Service"
        options={({navigation}) => ({
          headerShown: true,
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderLeftButton
              color={colors.black}
              size={32}
              onPress={navigation.goBack}
            />
          ),
        })}
      />
      <MainStackNav.Screen
        component={screens.Subcatalog}
        name="Subcatalog"
        options={({navigation}) => ({
          headerShown: true,
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderLeftButton
              color={colors.black}
              size={32}
              onPress={navigation.goBack}
            />
          ),
        })}
      />
    </MainStackNav.Navigator>
  );
};

export default MainStack;
