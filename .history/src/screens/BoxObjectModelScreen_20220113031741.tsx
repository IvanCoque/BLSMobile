import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform} from 'react-native'
export const BoxObjectModelScreen = () => {
    return (
        <View>
            <Text style={styles.title}>
                BoxObjectModelScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        ,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 20,
        //backgroundColor: 'red',
        //width: 250,
        borderWidth: 10,
    }
});
