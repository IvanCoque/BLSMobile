import React from 'react';
import Carousel from 'react-native-snap-carousel';
export const CarouselImages = ({images, height , width}) => {
  return(
      <Carousel
        layout='default'
        data={images}
        sliderWidth={width}
        itemWidth={width}
        itemHeight={height}
        renderItem={({item, index}) => {
          
      />
  );
};
