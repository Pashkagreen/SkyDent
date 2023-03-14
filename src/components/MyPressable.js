import React from 'react';
import {Platform, Pressable} from 'react-native';

const MyPressable = ({
  style,
  android_ripple = {color: 'lightgrey'},
  touchOpacity = 0.4,
  children,
  ...restOfPRops
}) => {
  return (
    <Pressable
      android_ripple={android_ripple}
      style={({pressed}) => [
        style,
        {opacity: Platform.OS === 'ios' && pressed ? touchOpacity : 1},
      ]}
      {...restOfPRops}>
      {children}
    </Pressable>
  );
};

export default MyPressable;
