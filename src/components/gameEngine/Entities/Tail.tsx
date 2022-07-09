import React from 'react'
import { View } from 'react-native';
import Constants from '../../../constants/constants';
export const Tail = ({size, elements}:any) => {
    // console.log(size, elements);
    
    return (
        <View style = {{
            width : Constants.GRID_SIZE* size,
            height : Constants.GRID_SIZE *size
        }}>
            {
                elements.map((el:any,idx:any)=>(
                    <View key= {idx} style={{
                        width : size,
                        height : size,
                        backgroundColor : 'green', 
                        position : 'absolute',
                        left : el[0] * size, 
                        top : el[1] *size+70
                    }}/>
                ))
            }
        </View>
    )
}
