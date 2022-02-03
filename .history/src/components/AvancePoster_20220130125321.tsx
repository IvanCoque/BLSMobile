import React, { Children } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Tratamiento } from '../interfaces/appInterfaces';
interface Props { 
    tratamiento : Tratamiento
    children : any
}
export const AvancePoster = ({tratamiento, children} : Props) => {
    console.log(tratamiento[0].foto);
  return(
      <View style = {{
          width: 300,
          height: 420,
      }}>
            <View style = {styles.imageContainer}>
                <Image
                    source={{uri: tratamiento[0].foto}}
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
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    }
})