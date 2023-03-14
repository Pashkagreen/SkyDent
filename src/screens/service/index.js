import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import ServicesService from '../../services/services';
import SpecialistsService from '../../services/specialists';
import ServiceView from './service-view';

const ServiceContainer = ({navigation, route}) => {
  const {serviceId} = route.params;

  const [serviceLoading, setServiceLoading] = useState(false);
  const [serviceData, setServiceData] = useState([]);

  const [availableSpecialists, setAvailableSpecialists] = useState([]);
  const [specialistsLoading, setSpecialistsLoading] = useState(false);

  const getService = async () => {
    if (serviceId) {
      setServiceLoading(true);
      try {
        const {innerEntity} = await ServicesService.getServiceById(serviceId);
        console.log(innerEntity);
        if (innerEntity.status === 200) {
          setServiceData(innerEntity.items);
        }
      } catch (err) {
        Alert.alert('Error', err.message);
      } finally {
        setServiceLoading(false);
      }
    }
  };

  const getAvailableSpecialists = async () => {
    if (serviceId) {
      setSpecialistsLoading(true);
      try {
        const {innerEntity} = await SpecialistsService.getSpecialistsByService(
          serviceId,
        );
        console.log(innerEntity);
        if (innerEntity.status === 200) {
          setAvailableSpecialists(innerEntity.items);
        }
      } catch (err) {
        Alert.alert('Error', err.message);
      } finally {
        setSpecialistsLoading(false);
      }
    }
  };

  const getAllData = async () => {
    await Promise.all([getService(), getAvailableSpecialists()]);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <ServiceView
      navigation={navigation}
      service={serviceData}
      serviceLoading={serviceLoading}
      specialists={availableSpecialists}
      specialistsLoading={specialistsLoading}
    />
  );
};

export default ServiceContainer;
