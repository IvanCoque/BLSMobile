import React from 'react';
import {  Image, StyleSheet, Text, View } from 'react-native';
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
        marginTop : top,
    }}>
        <View style = {{
          height : height-45,
        }}>
            <Carousel
              data={items}
              sliderWidth={width}
              //EL ANCHO EN EL QUE SE ALINEAN UNA CON OTRA
              itemWidth={width*0.68}
              renderItem={({item, index}:any) => {
                return (
                  <>
                    <View style = {styles.mainContainer}>
                      <View style = {styles.topContainer}>
                        <AvancePoster tratamiento={item}/>                    
                      </View>
                      {/* SEGUNDA CAJA INFERIOR */}
                      <View style={styles.bottomContainer}>
                        <Text style={styles.title}>Tratamiento para:{item.id_historia_clinica.diagnostico}</Text>
                        <Text style = {styles.description}>
                          {item.descripcion}
                        </Text>
                      </View>
                    </View>
                      
                  </>
                )}
                
              }
            />
        </View>
        
    </View>  
      
  );
};

const styles = StyleSheet.create({
  mainContainer : {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 20,
  },
  topContainer : {
    flex: 3,
    marginTop: "7%"
  },
  bottomContainer : {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: "5%",
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius : 20,
    marginBottom: "10%",
    padding: '5%'
  },
  description : {
    fontSize: 22,
    padding: '7%'
  },
  title : {
    fontSize: 25,
  }
})