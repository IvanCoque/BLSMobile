import React from 'react';
import { Text, View } from 'react-native';
import { CarouselImages } from '../../components/CarouselImages';

export const GaleriaImagenes = () => {
  return (
      <View>
            <Text>Galeria Imagenes</Text>
            <CarouselImages
                images={[
                    {url: 'https://www.elmundo.es/medio/2019/01/31/59a8b8f9e4b0b8b8c8b9c8f9-1.jpg'},
                    {url: 'https://www.elmundo.es/medio/2019/01/31/59a8b8f9e4b0b8b8c8b9c8f9-1.jpg'},
                    
            />
      </View>
  );
};
