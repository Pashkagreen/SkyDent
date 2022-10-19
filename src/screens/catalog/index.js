import CatalogView from './catalog-view';

const CatalogContainer = ({navigation}) => {
  const catalog = [
    {
      id: 1,
      title: 'Specialists',
      description: 'Our talented Specialists are our pride',
      addition: 'See the whole staff',
      image: require('../../assets/images/fav-doctor.png'),
      gradient: ['#08d4c4', '#01ab9d'],
      onPress: () =>
        navigation.navigate('Subcatalog', {
          type: 'Specialists',
        }),
    },
    {
      id: 2,
      title: 'Services',
      description: 'List of services provided by our team',
      addition: 'See the whole list',
      image: require('../../assets/images/service.png'),
      gradient: ['#5496D7', '#2C5AB3'],
      onPress: () =>
        navigation.navigate('Subcatalog', {
          type: 'Services',
        }),
    },
    {
      id: 3,
      title: 'Clinics',
      description: 'We definitely have a clinic in your district',
      addition: 'Choose your nearest',
      image: require('../../assets/images/process.png'),
      gradient: ['#B554D7', '#4F2CB3'],
      onPress: () => {},
    },
  ];

  return <CatalogView catalog={catalog} />;
};

export default CatalogContainer;
