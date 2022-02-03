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
      <View>
            <Image
                source={{uri: tratamiento.foto}}
                style = {

                }
            />
      </View>

  );
};
const styles = StyleSheet.create({
    image : {
        width: '100%',
    }
})