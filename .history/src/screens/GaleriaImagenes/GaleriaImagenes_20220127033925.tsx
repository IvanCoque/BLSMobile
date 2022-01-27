import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { CarouselImages } from '../../components/CarouselImages';
const widthScreen = Dimensions.get('window').width;
export const GaleriaImagenes = () => {
  return (
      <View style = {styles.container}>
            <Text style= {styles.title}>Galeria Imagenes</Text>
            <CarouselImages
                images={[
                    {url: 'https://pbs.twimg.com/media/FAu6q2pWUAUrwee?format=jpg&name=large'},
                    {url: 'https://pbs.twimg.com/media/FAu6q2rXMAA-21Z?format=jpg&name=large'},
                    {url: 'https://pbs.twimg.com/media/FAu6q2qX0BIzn1h?format=jpg&name=large'},
                    {url: 'https://pbs.twimg.com/media/FAu6q3aWUAU09jq?format=jpg&name=large'}
                ]}
                height={200}
                width={widthScreen}
            />
            <Text style= {styles.contain}>Progreso de Andrea </Text>
      </View>
  );
};
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
    
    title : {
        fontSize: 20,
        textAlign: 'center',
        margin: 30,
        backgroundColor: '#F5FCFF',

    },
    contain : {
        fontSize: 20,
        textAlign: 'center',
        margin: 30,
    }
    });