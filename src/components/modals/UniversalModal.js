import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

import {colors} from '../../utils/colors';

import ModalButton from '../ModalButton';
import ModalWrapper from './ModalWrapper';

const UniversalModal = ({
  title = '',
  image = '',
  description = '',
  text = '',
  buttonSuccessText = '',
  buttonFailureText = '',
  buttonFailureColor = '',
  buttonFailureStyle = {},
  imageStyle = {},
  unavailableItem = null,
  showModal = false,
  setShowModal = () => {},
  successOnPress = () => {},
  failureOnPress = () => {},
}) => {
  const handlePressHide = () => {
    setShowModal(false);
  };

  const insets = useSafeAreaInsets().bottom;
  const styles = getStyles(insets);

  return (
    <ModalWrapper
      setShowModal={setShowModal}
      showModal={showModal}
      swipeable={false}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.imageContainer}>
            <FastImage
              resizeMode="cover"
              source={image}
              style={styles.imageStyle}
            />
          </View>

          {!!title && <Text style={styles.titleText}>{title}</Text>}

          <Text style={styles.descriptionText}>{description}</Text>

          {!!text && <Text style={styles.text}>{text}</Text>}

          <ModalButton text={buttonSuccessText} onPress={successOnPress} />
          {!!buttonFailureText && (
            <ModalButton
              containerStyle={[styles.buttonFailure, buttonFailureStyle]}
              text={buttonFailureText}
              onPress={() => {
                failureOnPress();
                handlePressHide();
              }}
            />
          )}
        </View>
      </View>
    </ModalWrapper>
  );
};

const getStyles = insets =>
  StyleSheet.create({
    container: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingTop: 16,
      backgroundColor: colors.white,
      paddingHorizontal: 16,
      paddingBottom: insets || 24,
    },
    iconWrapper: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 18,
    },
    contentWrapper: {
      justifyContent: 'center',
    },
    imageStyle: {
      width: 100,
      height: 100,
    },
    imageContainer: {
      alignItems: 'center',
    },
    titleText: {
      marginTop: 16,
      textAlign: 'center',
      fontSize: 24,
      color: colors.darkBlue,
      fontWeight: 'bold',
    },
    descriptionText: {
      marginTop: 16,
      marginBottom: 32,
      paddingHorizontal: 16,
      lineHeight: 22,
      textAlign: 'center',
      color: colors.darkGrey,
      fontWeight: 'bold',
    },
    buttonFailure: {
      marginTop: 12,
      borderWidth: 1,
    },
    text: {
      marginBottom: 24,
      textAlign: 'center',
      fontSize: 20,
      color: colors.doctorBlue,
    },
  });

export default UniversalModal;
