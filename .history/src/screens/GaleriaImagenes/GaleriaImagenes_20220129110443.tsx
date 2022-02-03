import React, { useContext, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import dermatologiaApi from '../../api/dermatologiaApi';
import { CarouselImages } from '../../components/CarouselImages';
import { AuthContext } from '../../context/AuthContext';
import { useTratamientos } from '../../hooks/useTratamientos';
import { Tratamiento } from '../../interfaces/appInterfaces';
const widthScreen = Dimensions.get('window').width;
export const GaleriaImagenes = () => {
    const {user} = useContext(AuthContext)
    /*
    const {_id}:any = user;
    console.log(_id);
    const {tratamientos} = useTratamientos({_id});
    console.log(tratamientos);
    */
   useEffect(() => {
        tratamientos(;
       
   }, [])
    
   const tratamientos = async (_id) =>{
        const historiaClinicaId = await dermatologiaApi.get<any,any>(`/api/historiasClinicas/user/${_id}`);
        const resp = await  dermatologiaApi.get<Tratamiento>(`/api/tratamientos/historiaClinica/${historiaClinicaId.data._id}`);
        const tratamientos = resp.data;
        console.log('tratamientos');
        console.log(tratamientos);
   }
    return (
      <View style = {styles.container}>
            <Text style = {styles.title}>Galeria Imagenes</Text>
            <CarouselImages
                images={[
                    {url: 'https://pbs.twimg.com/media/FAu6q2pWUAUrwee?format=jpg&name=large'},
                    {url: 'https://pbs.twimg.com/media/FAu6q2rXMAA-21Z?format=jpg&name=large'},
                    {url: 'https://pbs.twimg.com/media/FAu6q2qX0BIzn1h?format=jpg&name=large'},
                    {url: 'https://pbs.twimg.com/media/FAu6q3aWUAU09jq?format=jpg&name=large'}
                ]}
                height={200}
                width={widthScreen*0.9}
            />
            <Text style= {styles.content}>Progreso de Andrea basado en la cirugía por microscopía 
                de la dermatología Dra. Betty Garzón realizado en la fecha del 20-01-2022 
            `</Text>
      </View>
  );
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