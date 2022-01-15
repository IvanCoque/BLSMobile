import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
export const Fab = () => {
    return (
        <TouchableOpacity
                        onPress={() => {
                            console.log('Clicked')
                        }}

                        style={styles.fabLocationRight}
                    >
                        <View style={styles.fab}>
                            <Text
                                style={styles.fabText}
                            >
                                +1 
                            </Text>
                        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})
