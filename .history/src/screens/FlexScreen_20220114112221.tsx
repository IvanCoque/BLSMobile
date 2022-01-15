import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
    return (
        <View>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text>Caja 2</Text>
            <Text>Caja 3</Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container
    caja1: {
        borderWidth: 2,
        borderColor: 'red',
    }
})