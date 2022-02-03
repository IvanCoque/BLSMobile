import React, { Children } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Tratamiento } from '../interfaces/appInterfaces';
interface Props { 
    tratamiento : Tratamiento
    children : any
}
export const AvancePoster = ({tratamiento, children} : Props) => {
    console.log(tratamiento.foto);
  return(
      <View style = {{
          width: 300,
          height: 420,
      }}>
            <View style = {styles.imageContainer}>
                <Image
                    source={{uri: tratamiento.foto}}
                    style = {
                        styles.image
                    }
                />
            </View>
      </View>

  );
};
const styles = StyleSheet.create({
    image : {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer : {
        flex: 1,
        borderRadius : 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.9,
        shadowRadius: 16.00,
        
        elevation: 30,
    }
})