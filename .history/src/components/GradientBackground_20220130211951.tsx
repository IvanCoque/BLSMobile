import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    children : JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children} : Props) => {
  return (
      <View style ={{
          flex: 1,
      }}>
          
          {children}
            <LinearGradient
                colors={['#d9a7c7', '#fffcdc']}
            >
            </LinearGradient>
          
      </View>
  )
  
};
