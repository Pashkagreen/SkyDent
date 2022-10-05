import React from 'react';
import {StyleSheet, View} from 'react-native';

import Modal from 'react-native-modal';

import {colors} from '../../utils/colors';

const ModalWrapper = ({
  children = {},
  style = {},
  styleContent = {},
  modalWindowData = {},
  animationIn = 'slideInUp',
  animationOut = 'slideOutDown',
  showModal = false,
  transparent = true,
  avoidKeyboard = false,
  swipeable = true,
  setShowModal = () => {},
  onModalHide = () => {}, // refactor logic with close && show modal
}) => {
  const closeModal = () => setShowModal(false);
  // const hideModal = () => (nextModal ? onModalHide : null);

  return (
    <Modal
      children={
        Object.keys(modalWindowData).length ? (
          modalWindowData
        ) : (
          <View style={[styles.content, styleContent]}>{children}</View>
        )
      }
      animationIn={animationIn}
      animationInTiming={400}
      animationOut={animationOut}
      animationOutTiming={400}
      avoidKeyboard={avoidKeyboard}
      backdropColor={'rgba(229, 229, 229, 0.8)'}
      backdropOpacity={1}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={400}
      hideModalContentWhileAnimating={true}
      isVisible={showModal}
      style={[styles.modal, style]}
      swipeDirection={swipeable ? ['down'] : null}
      swipeThreshold={swipeable ? 100 : null}
      transparent={transparent}
      useNativeDriver={true}
      onBackdropPress={closeModal}
      onModalHide={onModalHide}
      onRequestClose={closeModal}
      onSwipeComplete={swipeable ? closeModal : null}
    />
  );
};

const styles = StyleSheet.create({
  modal: {
    marginVertical: 0,
    marginHorizontal: 0,
    justifyContent: 'flex-end',
  },
  decoration: {
    width: 48,
    height: 4,
    backgroundColor: colors.darkGrey,
    borderRadius: 8,
    marginVertical: 8,
  },
  decorationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.backgroundGrey,
    maxHeight: '90%',
  },
});

export default ModalWrapper;
