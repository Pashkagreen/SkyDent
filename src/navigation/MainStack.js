import {createStackNavigator} from '@react-navigation/stack';
import AuthStackScreen from './AuthStack';
import BottomTab from './BottomTab';

const MainStackNav = createStackNavigator();

const MainStack = () => {
  return (
    <MainStackNav.Navigator initialRouteName="BottomTab">
      <MainStackNav.Screen name="BottomTab" component={BottomTab} />
      <MainStackNav.Screen name="Auth" component={AuthStackScreen} />
    </MainStackNav.Navigator>
  );
};

export default MainStack;
