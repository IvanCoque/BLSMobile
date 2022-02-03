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
            <Image
                source={{uri: tratamiento[0].foto}}
                style = {
                    styles.image
                }
            />
      </View>

  );
};
const styles = StyleSheet.create({
    image : {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    }
})