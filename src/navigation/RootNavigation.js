import OnBoardingStackScreen from './OnBoardingStack';
import MainStack from './MainStack';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

const RootNavigation = () => {
const RootStack = createStackNavigator();

const user = useSelector(state => state.user);
console.log(user);
return (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {!user.id && (
      <RootStack.Screen name="Onboarding" component={OnBoardingStackScreen} />
    )}
    <RootStack.Screen name="Main" component={MainStack} />
  </RootStack.Navigator>
);
};

export default RootNavigation;
