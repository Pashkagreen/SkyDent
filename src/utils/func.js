import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const screenHeight = height;
export const screenWidth = width;

export const useGetWidthForTabs = () => {
  const {width} = useWindowDimensions();

  // Horizontal Padding = 20...
  const tabWidth = width - 80;

  // Total five BottomTab...
  return tabWidth / 4;
};

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const formatDate = (dateStart = null, dateEnd = null) => {
  if (dateStart && dateEnd) {
    const dateFormater = date => {
      return `${date.getDate() > 9 ? date.getDate() : '0' + date.getDate()}.${
        date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
      }`;
    };

    const start = dateFormater(new Date(dateStart));
    const end = dateFormater(new Date(dateEnd));

    return `${start}-${end}`;
  }
  return ' - ';
};

export const formatedDate = (s, e) => {
  const localFormatting = date => {
    try {
      const d = date.split(' ')[0];
      return new Date(+d.split('/')[2], +d.split('/')[0] - 1, +d.split('/')[1]);
    } catch {
      return new Date();
    }
  };

  const start = localFormatting(s);
  const end = localFormatting(e);

  return formatDate(start, end);
};
