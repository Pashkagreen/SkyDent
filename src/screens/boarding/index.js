import BoardingView from './boarding-view';

const BoardingContainer = ({navigation}) => {
  const goNext = () => {
    navigation.navigate('Login');
  };
  return <BoardingView goNext={goNext} />;
};

export default BoardingContainer;
