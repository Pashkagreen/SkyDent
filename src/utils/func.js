import {useWindowDimensions} from 'react-native';

export const useGetWidthForTabs = () => {
  const {width} = useWindowDimensions();

  // Horizontal Padding = 20...
  let tabWidth = width - 80;

  // Total five BottomTab...
  return tabWidth / 4;
};
