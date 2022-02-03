import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    children : JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children} : Props) => {
  return (
      <View style ={{
          flex: 1,
      }}>
          
            <LinearGradient
                colors={['#d9a7c7', '#fffcdc','#f1d0f7']}
                //colors = {['#6190e8be','#a7bfe89c', '#ffffff']}
                style = {{
                    ...StyleSheet.absoluteFillObject
                }}
            >
                
                {children}
            </LinearGradient>
          
      </View>
  )
  
};
