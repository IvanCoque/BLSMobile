import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ProtectedScreen = () => {
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>Protected</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title : {
        fontSize: 20,
        marginBottom: 20
    }
});
