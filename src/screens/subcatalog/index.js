import {useState, useEffect} from 'react';
import SpecialistsService from '../../services/specialists';
import ServicesService from '../../services/services';
import SubcatalogView from './subcatalog-view';

const SubcatalogContainer = ({navigation, route}) => {
  const {type} = route?.params;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setNextPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const fetchData = async dataType => {
    setLoading(true);
    try {
      if (dataType === 'Specialists') {
        const {innerEntity} = await SpecialistsService.getSpecialists(page);
      } else if (dataType === 'Services') {
        const {innerEntity} = await ServicesService.getServices(page);
        setData(prev => [...prev, ...innerEntity.items]);
        setHasNextPage(innerEntity.hasNext);
        setTotalCount(innerEntity.totalCount);
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
