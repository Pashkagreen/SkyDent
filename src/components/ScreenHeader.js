import {StatusBar, View, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

const ScreenHeader = ({title}) => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} translucent={true} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 18,
    color: colors.black,
  },
});