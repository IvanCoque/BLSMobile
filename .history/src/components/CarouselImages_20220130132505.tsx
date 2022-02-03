import React from 'react';
import {  Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { AvancePoster } from './AvancePoster';

export const CarouselImages = ({items, height , width}:any)=> {
  console.log(items);
  const {top} = useSafeAreaInsets();
  /*
  const fotos = Object.values(items).map((tratamiento:any)=>{
    return {url: tratamiento.foto}
  })    
  const description = Object.values(items).map((tratamiento:any)=>{
      return {descripcion: tratamiento.descripcion}
  })
*/
  return(
    <View style = {{
        marginTop : top+20
    }}>
        <View style = {{
          height : 400,
        }}>
            <Carousel
              data={items}
              sliderWidth={width}
              //EL ANCHO EN EL QUE SE ALINEAN UNA CON OTRA
              itemWidth={230}

              renderItem={({item, index}:any) => {
                return (
                    
                    <AvancePoster tratamiento={item}></AvancePoster>
                  
                )}
                
              }
            />
        </View>
        
    </View>  
      
  );
};
