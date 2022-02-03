import React, { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  
    const opacity = useRef(new Animated.Value(0.2)).current;
    const position = useRef(new Animated.Value(0)).current;
  
    const fadeIn = ()=>{
        Animated.timing(opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start(/*CALLBACK LUEGO QUE TERMINA */);
      
    }
    const fadeOut = () => {
        Animated.timing(
            opacity,{
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }
        )
    }
    const startMoving = 
     
    return {
        opacity,
        translateY,
        fadeIn,
        fadeOut
    }
};
