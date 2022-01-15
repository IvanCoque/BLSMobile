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
    import { connect } from 'react-redux'
    import component from 'componentPath'
    import {actionCreator} from 'actionCreatorPath'
    
    const mapStateToProps = (state, ownProps) => {
        return {
            prop: state.prop
        }
    }
    
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            dispatch1: () => {
                dispatch(actionCreator)
            }
        }
    }
    
    const mergeProps = (stateProps, dispatchProps, ownProps) => {
        return {
            mergeProp: mergePropVal
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)
    title: {
        fontSize: 20,
        backgroundColor: 'red',
    }
});
