import React from "react";

import { View, Text, StyleSheet, useWindowDimensions, Pressable, TextInput} from "react-native"

import { Formik } from 'formik';
import { useNavigation } from "@react-navigation/native";


import Ionicons from 'react-native-vector-icons/Ionicons'

export const SignUp = ({ label }) => {

    const cardWidth = 0.8 * useWindowDimensions().width;
    const navigation = useNavigation();

    return (
        <Formik
     initialValues={{ email: '' }}
     onSubmit={values => navigation.navigate('SignUpTwo', {values} )}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <TextInput
         textContentType='emailAddress'
         keyboardType='email-address'
         autoCapitalize='none'
         autoCorrect={false}
         autoCompleteType='email'
         placeholder = 'Enter your email'
          style = {{borderColor: 'black', borderWidth: 1, height: 60, padding: 12, borderRadius: 15, marginBottom: 15}}
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <Pressable onPress = {handleSubmit} style = {[styles.appleContainer,{ width: cardWidth, marginBottom: 15, flexDirection: 'row'}]}>
         <Ionicons name = 'mail' color = 'white' size = {20} style = {{paddingHorizontal: 10}}/><Text style = {styles.font}>{label}</Text>
        </Pressable>
       </View>
     )}
   </Formik>
        
    )
}

const styles = StyleSheet.create({
    appleContainer: {
        backgroundColor: '#0742FF',
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
