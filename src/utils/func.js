import {useWindowDimensions} from 'react-native';

export const useGetWidth = () => {
  const {width} = useWindowDimensions();

  // Horizontal Padding = 20...
  let tabWidth = width - 80;

  // Total five Tabs...
  return tabWidth / 4;
};
