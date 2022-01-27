import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { CarouselImages } from '../../components/CarouselImages';
const widthScreen = Dimensions.get('window').width;
export const GaleriaImagenes = () => {
  return (
      <View>
            <Text>Galeria Imagenes</Text>
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
      </View>
  );
};
const styles = StyleS