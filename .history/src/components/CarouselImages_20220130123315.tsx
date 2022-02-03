import React from 'react';
import {  Image, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { AvancePoster } from './AvancePoster';

export const CarouselImages = ({items, height , width}:any)=> {
  console.log(description);
  return(
    <View style = {{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <Carousel
        layout='default'
        data={images}
        sliderWidth={width}
        itemWidth={width}
        itemHeight={height}
        renderItem={({item, index}:any) => {
          return (
            <AvancePoster>
              
              <Image
                source={{uri: item.url}}
                style={{width: width, height: height,borderRadius: 5, borderColor: '#fff', borderWidth: 5}}
                
              />
            </AvancePoster>
            
          )}
          
        }
      />
    </View>
      
  );
};
