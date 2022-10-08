import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import DashboardView from './dashboard-view';
import ServicesService from '../../services/services';

const DashboardContainer = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [servicesData, setServicesData] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(false);

  const getServices = async () => {
    setServicesLoading(true);
    try {
      const response = await ServicesService.services(1, 6);
      if (response) {
        setServicesData(response.innerEntity.items);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setServicesLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);
  return (
    <DashboardView
      user={user}
      navigation={navigation}
      servicesData={servicesData}
      servicesLoading={servicesLoading}
    />
  );
};

export default DashboardContainer;
