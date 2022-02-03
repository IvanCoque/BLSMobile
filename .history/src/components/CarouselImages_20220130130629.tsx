import React from 'react';
import {  Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { AvancePoster } from './AvancePoster';

export const CarouselImages = ({items, height , width}:any)=> {
  console.log(items);
  const {top} = useSafeAreaInsets();
  const fotos = Object.values(items).map((tratamiento:any)=>{
    return {url: tratamiento.foto}
  })    
  const description = Object.values(items).map((tratamiento:any)=>{
      return {descripcion: tratamiento.descripcion}
  })

  return(
    <View style = {{
        margin
        <Carousel
          layout='default'
          data={fotos}
          sliderWidth={600}
          itemWidth={300}
          itemHeight={height}
          renderItem={({item, index}:any) => {
            return (
                
                 <AvancePoster tratamiento={fotos[0]}></AvancePoster>
              
            )}
            
          }
        />
      
      
  );
};
