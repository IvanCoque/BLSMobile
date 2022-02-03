import React, { useRef } from 'react';

export const useAnimation = () => {
  
    const opacity = useRef(new Animated.Value(0.2)).current;
    const translateY = useRef(new Animated.Value(-150)).current;
  

    Animated.timing(opacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
    }).start(/*CALLBACK LUEGO QUE TERMINA */);

    Animated.timing(translateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
        easing : Easing.bounce
    }).start();
    
    return {

    }
};
