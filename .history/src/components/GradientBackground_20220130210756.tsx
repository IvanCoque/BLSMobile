import React from 'react';
import { View } from 'react-native';

interface Props {
    children : JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children} : Props) => {
  return (
      <View style ={{
          flex: 1,
          backgroundColor : 'rgba(255,255,255,0.1'
      }}>
          
      </View>
  )
  
};
