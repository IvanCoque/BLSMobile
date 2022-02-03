import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

import { CarouselImages } from '../../components/CarouselImages';
import { GradientBackground } from '../../components/GradientBackground';
import { AuthContext } from '../../context/AuthContext';
import { useTratamientos } from '../../hooks/useTratamientos';
import { LoadingScreen } from '../Navigation/LoadingScreen';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
export const GaleriaImagenes = () => {
    const {user} = useContext(AuthContext)
    const {_id}:any = user;
    console.log(_id);
    const {tratamientos, isLoading} = useTratamientos({_id});
    //console.log('tratamientos obtenidos del hook')
    console.log(tratamientos);
    if(isLoading){
        return (
            <LoadingScreen/>
        )
    }else{
        
        return (
            <GradientBackground>
                <ScrollView style = {{
                flex: 1,
            }}>
                <CarouselImages
                    items={tratamientos}
                    height={heightScreen}
                    width={widthScreen}
                />
            </ScrollView>
            
            </GradientBackground>
                
            
        );
    }
   
};
const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#c526261b'
    },
    
    title : {
        flex: 1,
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 50,
        fontWeight: 'bold',
        
    },
    content : {
        flex: 5,
        fontSize: 20,
        padding: 30,
        textAlign: 'justify',
        
    },
    carousel : {
        flex: 1,
    }
    });