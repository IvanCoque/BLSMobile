import { flexbox, height } from '@mui/system'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { GradientBackground } from '../components/GradientBackground'

export const StudentScreen = () => {
  return (
    <GradientBackground colors = {['white','#80aaff']}>
        <ScrollView contentContainerStyle={styles.mainContainer}
        >
            <View style={
                styles.topContainer
            }
            >
                <Text style={styles.topText}>Hola amiguito, escribe tu nombre</Text>
            </View>
            <View style={
                styles.bottomContainer
            }>
                <Text style={styles.bottomText}>HOLA</Text>
            </View>
                   
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
        paddingVertical : 30,
        paddingHorizontal : 30
    },
    bottomContainer : {
        flex : 4,
        alignItems : 'center',
        backgroundColor : 'red',
        paddingVertical : 30
    },
    topText : {
        fontSize : 40,
        color: 'green',
    },
    bottomText : {
        fontSize : 30,
        color: 'green'
    }
})