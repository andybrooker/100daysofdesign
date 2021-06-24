import React from "react";

import { View, Text, StyleSheet, useWindowDimensions, Pressable, TouchableOpacity, TextInput} from "react-native"

import { Formik } from 'formik';
import { useNavigation } from "@react-navigation/native";

import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required')
  })


import Ionicons from 'react-native-vector-icons/Ionicons'

export const SignUp = ({ label }) => {

    const cardWidth = 0.8 * useWindowDimensions().width;
    const navigation = useNavigation();

    return (
        <Formik
        validationSchema={loginValidationSchema}
     initialValues={{ email: '' }}
     onSubmit={values => navigation.navigate('SignUpTwo', {values} )}
   >
     {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, dirty}) => (
       <View>
           <View style = {{height: 20}}>
           {errors.email &&
         <Text style={{ fontSize: 10, color: 'red', padding: 5}}>{errors.email}</Text>
       }
           </View>
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
         <TouchableOpacity  disabled = {!(isValid && dirty)} onPress = {handleSubmit} style = {[styles.appleContainer, (isValid && dirty) ? { width: cardWidth, marginBottom: 15, flexDirection: 'row', opacity: 1} : { width: cardWidth, marginBottom: 15, flexDirection: 'row', opacity: 0.5}]}>
         <Ionicons name = 'mail' color = 'white' size = {20} style = {{paddingHorizontal: 10}}/><Text style = {styles.font}>{label}</Text>
        </TouchableOpacity>
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
