import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Sound from "react-native-sound";
// import Sound from "react-native-sound";
import { GradientBackground } from "../../../components/GradientBackground"
import { useAudio } from '../../../hooks/useAudio';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
export const LanguageScreen = () => {
    const {setNuevoAudio} = useAudio("lenguaje_letras_presentacion.mp3")
    useEffect(() => {
        console.log("entra");
        return () => {
            
        };
    }, [])
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    
    const modificarAudio = (nuevoAudio : string) =>{
        setNuevoAudio(nuevoAudio);
    }
    
  return (
    <GradientBackground colors = {['white','#80aaff']}>
        <SafeAreaView
            style={{
                flex: 1,
                flexDirection : 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginVertical : heightScreen * 0.035,
            }}
        >
            <TouchableOpacity
                activeOpacity={0.6}
                onPress = {()=>modificarAudio("hola.mp3")}
            >
                <View style = {styles.card}>
                    <Image
                        source={require('../../../../assets/Home/lettersGame/letterA.png')}
                        style={styles.cardImage}
                    />
                    {/* <Text style = {styles.cardDescription}>Lenguaje</Text> */}
                </View>
                
            </TouchableOpacity>
            
            <TouchableOpacity
                activeOpacity={0.6}
                onPress = { ()=>modificarAudio("hola.mp3")}
            >
                <View style = {styles.card}>
                        <Image
                            source={require('../../../../assets/Home/lettersGame/letterF.png')}
                            style={styles.cardImage}
                        />
                    {/* <Text style = {styles.cardDescription}>Matemáticas</Text> */}
                </View>
        
            </TouchableOpacity>
            
            <TouchableOpacity
                activeOpacity={0.6}
                onPress = { ()=>modificarAudio("hola.mp3")}
            >
                <View style = {styles.card}>
                        <Image
                            // source={{uri : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}}
                            source={require('../../../../assets/Home/lettersGame/letterH.png')}
                            style={styles.cardImage}
                        />
                    {/* <Text style = {styles.cardDescription}>Ciencias Naturales</Text> */}
                </View>

            </TouchableOpacity>
            
            <TouchableOpacity
                activeOpacity={0.6}
                onPress = { ()=>modificarAudio("hola.mp3")}
            >
                <View style = {styles.card}>
                        <Image
                            source={require('../../../../assets/Home/lettersGame/letterY.png')}
                            style={styles.cardImage}
                        />
                    {/* <Text style = {styles.cardDescription}>Ciencias Sociales</Text> */}
                </View>
            </TouchableOpacity>
            
        </SafeAreaView>
    </GradientBackground>
  )
}
const styles = StyleSheet.create({
    card : {
        
            width : widthScreen*.6,
            height : heightScreen*.2,
            backgroundColor : 'rgba(18, 59, 64,0.2)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius : 10,
            shadowColor: "rgba(18, 59, 64,1)",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,

        
    },
    cardDescription :{
        marginTop  : '5%',
        color : 'white',
        fontSize : 20
    },
    cardImage : {
        height:'70%', 
        width:'70%'
    }
})