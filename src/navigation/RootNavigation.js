import React from 'react';
import {useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/index';
import MainStack from './MainStack';
import OnBoardingStackScreen from './OnBoardingStack';

const RootNavigation = () => {
  const RootStack = createStackNavigator();

  const user = useSelector(state => state.user);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!user.id && (
        <RootStack.Screen component={OnBoardingStackScreen} name="Onboarding" />
      )}
      <RootStack.Screen component={MainStack} name="Main" />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
