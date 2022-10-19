import {useState, useEffect} from 'react';
import SpecialistsService from '../../services/specialists';
import ServicesService from '../../services/services';
import SubcatalogView from './subcatalog-view';

const SubcatalogContainer = ({navigation, route}) => {
  const {type} = route?.params;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setNextPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchData = async dataType => {
    setLoading(true);
    try {
      if (type === 'Specialists') {
        const response = await SpecialistsService.getSpecialists();
        console.log('specialists', response);
      } else if (type === 'Services') {
        const response = await ServicesService.getServices(page);
        console.log('services', response);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loading && hasNextPage) {
      setNextPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    fetchData(type);
  }, [page]);

  return (
    <SubcatalogView
      type={type}
      loadMore={loadMore}
      data={data}
      loading={loading}
    />
  );
};

export default SubcatalogContainer;
