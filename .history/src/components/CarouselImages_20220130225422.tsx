import React from 'react';
import {  Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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
          height : height-60,
        }}>
            <Carousel
              data={items}
              sliderWidth={width}
              //EL ANCHO EN EL QUE SE ALINEAN UNA CON OTRA
              itemWidth={width*0.7}
              renderItem={({item, index}:any) => {
                return (
                  <>
                    <View style = {styles.mainContainer}>
                      <View style = {styles.topContainer}>
                        <AvancePoster tratamiento={item}/>                    
                      </View>
                      {/* SEGUNDA CAJA INFERIOR */}
                      <ScrollView 
                          contentContainerStyle = {{flexGrow:1, justifyContent : 'center', alignItems: 'center'}}
                          style={styles.bottomContainer}
                      >
                        <Text style={styles.title}>Tratamiento para:{item.id_historia_clinica.diagnostico}</Text>
                        <Text style = {styles.description}>
                          {item.descripcion}
                        </Text>
                      </ScrollView>
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
    flex: 1.3,
    marginTop: "7%"
  },
  bottomContainer : {
    flex: 6,
    marginVertical : '5%',
    marginHorizontal: "-1.5%",
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius : 12,
    padding: '7%',
    shadowColor: "#822424",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    },
  title : {
    fontWeight: 'bold',
    fontSize: 19,
  },
  description : {
    fontSize: 15,
    padding: '7%'
  },
})