import BoardingView from './boarding-view';

const BoardingContainer = ({navigation}) => {
  const goNext = () => {
    navigation.navigate('Auth');
  };
  return <BoardingView goNext={goNext} />;
};

export default BoardingContainer;
