import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
//const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {
    const {width,height}
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.cajaMorada}/>
                <View style={styles.cajaNaranja}/>
            </View>
            <Text style={styles.title}>W: {width}, H: {height}</Text>
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
    title: {
        fontSize: 20,
        textAlign: 'center',

    }
})