import React from 'react';
import {  Image, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { AvancePoster } from './AvancePoster';

export const CarouselImages = ({items, height , width}:any)=> {
  console.log(items);
  
  const fotos = Object.values(items).map((tratamiento:any)=>{
    return {url: tratamiento.foto}
  })    
  const description = Object.values(items).map((tratamiento:any)=>{
      return {descripcion: tratamiento.descripcion}
  })

  return(
        <Carousel
          layout='default'
          data={fotos}
          sliderWidth={width}
          itemWidth={width}
          itemHeight={height}
          renderItem={({item, index}:any) => {
            return (
                
                 <AvancePoster tratamiento={fotos[0]}></AvancePoster>
              
            )}
            
          }
        />
      
      
  );
};
