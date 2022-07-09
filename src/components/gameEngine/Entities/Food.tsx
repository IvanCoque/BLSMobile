import React from 'react'
import { View } from 'react-native'
export const Food = ({position, size}:any) => {
    const x = position[0];
    const y = position[1];
    
  return (
    <View
        style = {{
            width : size,
            height : size+70,
            backgroundColor : 'green',
            position : 'absolute',
            left : x * size, 
            top : y * size
        }}
    />
  )
}
