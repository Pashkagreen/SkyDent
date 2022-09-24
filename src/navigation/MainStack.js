import {createStackNavigator} from '@react-navigation/stack';

import AuthStackScreen from './AuthStack';
import BottomTab from './BottomTab';

const MainStackNav = createStackNavigator();

const MainStack = () => {
  return (
    <MainStackNav.Navigator
      initialRouteName="BottomTab"
      screenOptions={{headerShown: false}}>
      <MainStackNav.Screen component={BottomTab} name="BottomTab" />
    </MainStackNav.Navigator>
  );
};

export default MainStack;
