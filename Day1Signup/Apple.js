import React from "react";

import { View, Text, StyleSheet, useWindowDimensions, Pressable} from "react-native"

import Ionicons from 'react-native-vector-icons/Ionicons'



export const Apple = () => {

    const cardWidth = 0.8 * useWindowDimensions().width;

    return (
        <Pressable  onPress = {() => {alert('Sign up with Apple')}} style = {[styles.appleContainer,{ width: cardWidth, flexDirection: 'row'}]}>
            <Ionicons name = 'logo-apple' color = 'white' size = {20} style = {{paddingHorizontal: 10}}/><Text style = {styles.font}>Sign up with Apple</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    appleContainer: {
        backgroundColor: 'black',
        height: 60,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    font: {
        fontWeight: '700',
        fontSize: 20,
        color: 'white'
    }
})
