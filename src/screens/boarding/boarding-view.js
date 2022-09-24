import React, {memo} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Button from '../../components/Button';

import {Colors} from '../../utils/colors';

const height = Dimensions.get('window').height;
const heightLogo = height * 0.28;

const BoardingView = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          resizeMode="contain"
          source={require('../../assets/images/image.png')}
          style={styles.logo}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Smile always and everywhere!</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <Button
            color={Colors.white}
            name="navigate-next"
            size={20}
            text="Get Started"
            onPress={props.goNext}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default memo(BoardingView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dentalGreen,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: heightLogo,
    height: heightLogo,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 40,
  },
  title: {
    color: Colors.darkBlue,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
});
