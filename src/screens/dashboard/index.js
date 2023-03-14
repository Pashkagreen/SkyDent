import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import ServicesService from '../../services/services';

import DashboardView from './dashboard-view';

const DashboardContainer = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [servicesData, setServicesData] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [servicesLoading, setServicesLoading] = useState(false);

  const onNotificationPress = () => {
    setNotificationsEnabled(prev => !prev);
  };

  const seeAllServices = () => {
    navigation.navigate('Subcatalog', {
      type: 'Services',
    });
  };

  const getServices = async () => {
    setServicesLoading(true);
    try {
      const response = await ServicesService.getServices(1, 6);
      if (response) {
        setServicesData(response.innerEntity.items);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setServicesLoading(false);
    }
  };

  const getAllData = async () => {
    await Promise.all([getServices()]);
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <DashboardView
      navigation={navigation}
      notificationsEnabled={notificationsEnabled}
      seeAllServices={seeAllServices}
      servicesData={servicesData}
      servicesLoading={servicesLoading}
      user={user}
      onNotificationPress={onNotificationPress}
    />
  );
};

export default DashboardContainer;
