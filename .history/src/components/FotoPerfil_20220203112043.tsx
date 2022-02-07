import React from 'react'
import { Image, View } from 'react-native'
interface Props {
    foto : string
}
export const FotoPerfil = ({foto} :Props) => {
    console.log(foto)
    return (
        <View 
            style={{
                alignItems: 'center'
            }}
        >
            <Image
                source={require(foto.toString)}
                style={{
                    width: 110,
                    height: 100
                }}
            >
                
            </Image>
        </View>
    )
}
