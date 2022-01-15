import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaAzul}/>
            <View style={styles.cajaTomate}/>
            <View style={styles.cajaCeleste}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#28425B"
    },
    cajaAzul : {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#4350dc',    
    },
    cajaTomate : {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#c2af46',
    },
    cajaCeleste : {
        width: 100,
        height: 100,
        borderWidth: 10,
        flex: 1,
        borderColor: 'white',
        backgroundColor: '#47c1e2',
    }
})