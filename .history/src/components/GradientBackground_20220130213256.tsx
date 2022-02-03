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
                colors={['#f09ba9', '#ec93e077','#decde06b']}
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
