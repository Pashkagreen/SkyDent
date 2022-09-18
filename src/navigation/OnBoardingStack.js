import {createStackNavigator} from '@react-navigation/stack';
import screens from '../screens';
import AuthStackScreen from './AuthStack';

const OnBoardingStack = createStackNavigator();

const OnBoardingStackScreen = () => (
  <OnBoardingStack.Navigator
    screenOptions={{
      tabBarShowLabel: false,
    }}>
    <OnBoardingStack.Screen
      name="Boarding"
      component={screens.Boarding}
      options={{headerShown: false}}
    />
    <OnBoardingStack.Screen
      name="Auth"
      component={AuthStackScreen}
      options={{headerShown: false}}
    />
  </OnBoardingStack.Navigator>
);

export default OnBoardingStackScreen;
