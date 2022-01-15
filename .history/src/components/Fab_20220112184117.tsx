import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
const Fab = () => {
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
    fabLocationRight: {
export default Fab
