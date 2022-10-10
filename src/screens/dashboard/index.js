import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import DashboardView from './dashboard-view';
import ServicesService from '../../services/services';

const DashboardContainer = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [servicesData, setServicesData] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [servicesLoading, setServicesLoading] = useState(false);

  const onNotificationPress = () => {
    setNotificationsEnabled(prev => !prev);
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
      user={user}
      navigation={navigation}
      servicesData={servicesData}
      servicesLoading={servicesLoading}
      notificationsEnabled={notificationsEnabled}
      onNotificationPress={onNotificationPress}
    />
  );
};

export default DashboardContainer;
