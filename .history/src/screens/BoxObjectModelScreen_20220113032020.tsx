import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform} from 'react-native'
export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.}>
            <Text style={styles.title}>
                BoxObjectModelScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'yellow',
    },
    title: {
        fontSize: 20,
        //backgroundColor: 'red',
        //width: 250,
        borderWidth: 10,
    }
});
