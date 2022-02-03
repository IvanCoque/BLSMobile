import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import dermatologiaApi from '../../api/dermatologiaApi';
import { CarouselImages } from '../../components/CarouselImages';
import { AuthContext } from '../../context/AuthContext';
import { useTratamientos } from '../../hooks/useTratamientos';
import { Tratamiento } from '../../interfaces/appInterfaces';
import { LoadingScreen } from '../Navigation/LoadingScreen';
const widthScreen = Dimensions.get('window').width;
export const GaleriaImagenes = () => {
    const {user} = useContext(AuthContext)
    const {_id}:any = user;
    console.log(_id);
    const {tratamientos, isLoading} = useTratamientos({_id});
    console.log('tratamientos obtenidos del hook')
    console.log(tratamientos);
    if(isLoading){
        return (
            <LoadingScreen/>
        )
    }else{
        
        const fotos = Object.values(tratamientos).map((tratamiento:any)=>{
            return {url: tratamiento.foto}
        })    
        const description = 
        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>Galeria Imagenes</Text>
                <CarouselImages
                    images={fotos}
                    height={200}
                    width={widthScreen*0.9}
                    description = {}
                />
                <Text style= {styles.content}>
                    {tratamientos[0].descripcion}
                </Text>
            </View>
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