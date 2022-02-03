import React from 'react';
import {  Image, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export const CarouselImages = ({images, height , width, description}:any)=> {
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
            <Image
              source={{uri: item.url}}
              style={{width: width, height: height,borderRadius: 5, borderColor: '#fff', borderWidth: 5}}
              
            />
            
          )}
          
        }
      />
    </View>
      
  );
};
