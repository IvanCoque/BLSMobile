import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
const 
export const DimensionesScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 600,
        backgroundColor: 'red',
    },
    cajaMorada :{
        backgroundColor:'#5856D6',
        width: '50%',
        height: '50%',
    },
    cajaNaranja :{
        backgroundColor:'#FF9F1C'
    },
})