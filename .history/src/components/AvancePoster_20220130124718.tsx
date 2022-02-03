import React, { Children } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Tratamiento } from '../interfaces/appInterfaces';
interface Props { 
    tratamiento : Tratamiento
    children : any
}
export const AvancePoster = ({tratamiento, children} : Props) => {
    console.log(tratamiento);
  return(
      <View style = {{
          width: 200,
          height: 400,
          backgroundColor: "red"
      }}>
            <Image
                source={{uri: tratamiento.foto}}
                style = {
                    styles.image
                }
            />
      </View>

  );
};
const styles = StyleSheet.create({
    image : {
        width: 100,
        height: 100,
    }
})