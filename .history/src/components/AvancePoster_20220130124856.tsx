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
          width: 200,
          height: 400,
          backgroundColor: "red"
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
        borderRadius: 18
    }
})