import React, { useRef } from 'react';
import Animated from 'react-native-reanimated';

export const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(
        opacity, 
        {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }
    ).start();
    
  };
};

