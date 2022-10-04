import React from 'react';
import {View, StyleSheet} from 'react-native';

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
      avoidKeyboard={avoidKeyboard}
      backdropOpacity={1}
      isVisible={showModal}
      transparent={transparent}
      useNativeDriver={true}
      animationIn={animationIn}
      animationOut={animationOut}
      backdropColor={'rgba(229, 229, 229, 0.8)'}
      onBackdropPress={closeModal}
      onRequestClose={closeModal}
      onModalHide={onModalHide}
      swipeDirection={swipeable ? ['down'] : null}
      onSwipeComplete={swipeable ? closeModal : null}
      swipeThreshold={swipeable ? 100 : null}
      style={[styles.modal, style]}
      backdropTransitionOutTiming={400}
      backdropTransitionInTiming={400}
      animationOutTiming={400}
      animationInTiming={400}
      hideModalContentWhileAnimating={true}
      children={
        Object.keys(modalWindowData).length ? (
          modalWindowData
        ) : (
          <View style={[styles.content, styleContent]}>{children}</View>
        )
      }
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
