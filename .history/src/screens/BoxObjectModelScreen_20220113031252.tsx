import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform} from 'react-native'
export const BoxObjectModelScreen = () => {
    return (
        <View>
            <Text style={styles.}>
                BoxObjectModelScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    }
});
