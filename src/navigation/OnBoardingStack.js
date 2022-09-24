import {useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

import screens from '../screens';
import AuthStackScreen from './AuthStack';

const OnBoardingStack = createStackNavigator();

const OnBoardingStackScreen = () => {
  const {isFirstLaunch} = useSelector(state => state.app);
  console.log(isFirstLaunch);

  return (
    <OnBoardingStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      {isFirstLaunch && (
        <OnBoardingStack.Screen
          component={screens.Boarding}
          name="Boarding"
          options={{headerShown: false}}
        />
      )}
      <OnBoardingStack.Screen
        component={AuthStackScreen}
        name="Auth"
        options={{headerShown: false}}
      />
    </OnBoardingStack.Navigator>
  );
};

export default OnBoardingStackScreen;
