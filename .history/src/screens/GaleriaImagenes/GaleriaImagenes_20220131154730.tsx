import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

import { CarouselImages } from '../../components/CarouselImages';
import { GradientBackground } from '../../components/GradientBackground';
import { AuthContext } from '../../context/AuthContext';
import { useTratamientos } from '../../hooks/useTratamientos';
import { LoadingScreen } from '../Navigation/LoadingScreen';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
export const GaleriaImagenes = (historiaClinicaId) => {
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
