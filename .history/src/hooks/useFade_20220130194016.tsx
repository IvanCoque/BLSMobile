import { useRef } from 'react';
import Animated from 'react-native-reanimated';

export const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(
        opacity,
        {
            toValue: 1,
            duration: 5000,
            easing : Animated.eas
        }
    ).start();
    
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(opacity, {
      toValue: 0,
      duration: 3000
    }).start();
  };


};

