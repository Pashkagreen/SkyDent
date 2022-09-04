import OnBoardingStackScreen from './OnBoardingStack';
import BottomTab from './BottomTab';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setFirstLaunch} from '../store/reducers/app/appReducer';

const RootNavigation = () => {
  const dispatch = useDispatch();
  const isFirstLaunch = useSelector(state => state.app.isFirstLaunch);

  useEffect(() => {
    dispatch(setFirstLaunch());
  }, []);

  return <>{!isFirstLaunch ? <BottomTab /> : <OnBoardingStackScreen />}</>;
};

export default RootNavigation;
