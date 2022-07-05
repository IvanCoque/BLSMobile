import { flexbox, height } from '@mui/system'
import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useRef } from 'react'
import { Animated, Keyboard, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GradientBackground } from '../components/GradientBackground'
import { PublicContext } from '../context/PublicContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/loginTheme'

export const StudentScreen = () => {
    const { registro} = useContext(PublicContext);
    const navigation = useNavigation();
    //USEFORM
    const {nombre, onChange} = useForm({
        nombre : ''
    })

    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
             toValue: 1,
             useNativeDriver : true,
             duration : 5000
          }).start();
        return () => {
            
        };
    }, [])
    const onRegister = ()=>{
        console.log(nombre);
        const obj = {
            nombre
        }
        console.log(obj)
        registro({nombre})
        navigation.navigate( 'PublicScreen')

    }
  return (
    <GradientBackground colors = {['white','#80aaff']}>
        <ScrollView contentContainerStyle={styles.mainContainer}
        >
            <View style={
                styles.topContainer
            }
            >
                <Animated.Text style={[
                        styles.topText,
                        {
                            opacity : fadeAnim
                        }
                    ]}>
                        Hola amiguito
                </Animated.Text>
                
            </View>
            <Animated.View style={[
                styles.bottomContainer,
                {
                    opacity : fadeAnim
                }
            ]
            }>
                <Animated.Image
                    source={require("../../assets/Home/munequito.png")}
                    resizeMode="contain"
                    style={{
                        width : 200,
                        height : 200,
                    }}
                />
                    
                <TextInput
                        placeholder='Ingresa tu nombre'
                        placeholderTextColor = 'rgba(0,0,0,0.4)'
                        
                        underlineColorAndroid="black"
                        style = {styles.inputText}
                        selectionColor='black'
                        onChangeText={ (value) => onChange(value, 'nombre')}
                        value = {nombre}  
                        onSubmitEditing={onRegister}
                        autoCorrect={false}
                    />
                <TouchableOpacity
                    activeOpacity={0.8}
                    style = {loginStyles.button}
                    onPress = {onRegister}
                >
                    <Text style = {loginStyles.buttonText}>Continuar</Text>
                </TouchableOpacity>
            </Animated.View>
                   
        </ScrollView>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
    },
    topContainer : {
        flex : 2,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'transparent',
        paddingTop : 60,
        paddingHorizontal : 30
    },
    bottomContainer : {
        flex : 4,
        alignItems : 'center',
        backgroundColor : 'transparent',
        paddingVertical : 60
    },
    topText : {
        fontSize : 50,
        color: 'rgba(0, 0, 0, 0.9)',
    },
    bottomText : {
        fontSize : 30,
        color: 'green'
    },
    inputText : {
        paddingVertical : 30,
        fontSize : 30,
        color: 'rgba(0,0,0,0.8)'
    },
})