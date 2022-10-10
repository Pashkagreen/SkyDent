import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderLeftButton = ({onPress, size = 32, color = 'white'}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons color={color} name="chevron-left" size={size} />
    </TouchableOpacity>
  );
};

export default HeaderLeftButton;
