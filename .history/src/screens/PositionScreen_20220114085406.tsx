import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style = {styles.cajaMorada}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        
    }
    
})