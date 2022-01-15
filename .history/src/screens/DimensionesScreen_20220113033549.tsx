import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const DimensionesScreen = () => {
    return (
        <View>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
        </View>
    )
}

const styles = StyleSheet.create({
    cajaMorada :{
        backgroundColor:'#5856D6',
        width: 100,
    },
    cajaNaranja :{
        backgroundColor:'#FF9F1C'
    },
})