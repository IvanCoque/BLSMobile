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
                colors={['#f09bd0', '#ec93d677','#cb9fd36b']}
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
