import OnBoardingStackScreen from './OnBoardingStack';
import BottomTab from './BottomTab';
import React from 'react';
import {useSelector} from 'react-redux';

const RootNavigation = () => {
  const isFirstLaunch = useSelector(state => state.app.isFirstLaunch);

  return <>{isFirstLaunch ? <OnBoardingStackScreen /> : <BottomTab />}</>;
};

export default RootNavigation;
