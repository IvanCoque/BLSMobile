import { flexbox, height } from '@mui/system'
import React, { useEffect, useRef } from 'react'
import { Animated, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { GradientBackground } from '../components/GradientBackground'
import { loginStyles } from '../theme/loginTheme'

export const StudentScreen = () => {
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
                    source={require("../../assets/Home/munequito.jpg")}
                    width ={60}
                    height={60}
                />
                    
                <TextInput
                        placeholder='Ingresa tu nombre'
                        placeholderTextColor = 'rgba(0,0,0,0.4)'
                        
                        underlineColorAndroid="black"
                        style = {styles.inputText}
                        selectionColor='black'
                        // onChangeText={ (value) => onChange(value, 'cedula')}
                        // value = {cedula}  
                        // onSubmitEditing={onRegister}
                        autoCorrect={false}
                    />
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
        fontSize : 30,
        color: 'rgba(0,0,0,0.8)'
    }
})