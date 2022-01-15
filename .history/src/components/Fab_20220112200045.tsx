import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

interface Props {
    title : string
}

export const Fab = (props:Props) => {
    console.log(props.title)
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
                                {props.title}
                            </Text>
                        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fabLocationRight : {
        position: 'absolute',
        bottom: 5,
        left: 5
    },
    fabLocationLeft : {
        position: 'absolute',
        bottom: 5,
        right: 5
    },
    fab:{
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText:{
        color: "white",
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf : 'center',
    }
})
