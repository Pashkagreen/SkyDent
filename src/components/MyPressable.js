import React from 'react';
import {Pressable, Platform} from 'react-native';

const MyPressable = ({
  style,
  android_ripple = {color: 'lightgrey'},
  touchOpacity = 0.4,
  children,
  ...restOfPRops
}) => {
  return (
    <Pressable
      style={({pressed}) => [
        style,
        {opacity: Platform.OS === 'ios' && pressed ? touchOpacity : 1},
      ]}
      android_ripple={android_ripple}
      {...restOfPRops}>
      {children}
    </Pressable>
  );
};

export default MyPressable;
