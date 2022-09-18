import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
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
          name="Boarding"
          component={screens.Boarding}
          options={{headerShown: false}}
        />
      )}
      <OnBoardingStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{headerShown: false}}
      />
    </OnBoardingStack.Navigator>
  );
};

export default OnBoardingStackScreen;
