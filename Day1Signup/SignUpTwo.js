import React from "react";

import { View, Text, StyleSheet, useWindowDimensions, Pressable, TextInput} from "react-native"

import { Formik } from 'formik';
import { useNavigation } from "@react-navigation/native";



export const SignUp = ({ label, initialEmail }) => {

    const cardWidth = 0.8 * useWindowDimensions().width;
    const navigation = useNavigation();

    return (
        <Formik
     initialValues={{ 
       email: `${initialEmail}`,
       phone: '',
       name: '',
       password: ''
     }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <View>
         <Text style = {{padding: 5, fontWeight: '700', color: '#959595'}}>Name</Text>
         <TextInput
         textContentType='name'
         keyboardType='name-phone-pad'
         autoCapitalize='none'
         autoCompleteType='name'
         autoCorrect={false}
         placeholder = 'Enter your full name'
          style = {{borderColor: 'black', borderWidth: 1, height: 60, padding: 12, borderRadius: 15, marginBottom: 15}}
           onChangeText={handleChange('name')}
           onBlur={handleBlur('name')}
           value={values.name}
         />
         </View>
         <View>
         <Text style = {{padding: 5, fontWeight: '700', color: '#959595'}}>Email</Text>
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
         </View>
         <View>
         <Text style = {{padding: 5, fontWeight: '700', color: '#959595'}}>Password</Text>
         <TextInput
         textContentType='password'
         secureTextEntry= {true}
         autoCapitalize='none'
         autoCorrect={false}
         autoCompleteType='password'
         placeholder = 'Enter a password'
          style = {{borderColor: 'black', borderWidth: 1, height: 60, padding: 12, borderRadius: 15, marginBottom: 15}}
           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
         />
         </View>
         <View>
         <Text style = {{padding: 5, fontWeight: '700', color: '#959595'}}>Phone Number</Text>
         <TextInput
         textContentType='telephoneNumber'
         keyboardType='phone-pad'
         autoCapitalize='none'
         autoCompleteType='tel'
         placeholder = 'Enter phone number'
          style = {{borderColor: 'black', borderWidth: 1, height: 60, padding: 12, borderRadius: 15, marginBottom: 15}}
           onChangeText={handleChange('phone')}
           onBlur={handleBlur('phone')}
           value={values.phone}
         />
         </View>
         

         <Pressable onPress = {handleSubmit} style = {[styles.appleContainer,{ width: cardWidth, marginTop: 15, marginBottom: 15}]}>
            <Text style = {styles.font}>{label}</Text>
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
