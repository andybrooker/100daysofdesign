import 'react-native-gesture-handler';

import React from 'react';

import {
  Text,
  TextInput,
  StyleSheet,
  View,
  useWindowDimensions,
  Pressable,
  TouchableOpacity
} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Formik } from 'formik';

import { Apple } from './Apple';
import { SignUp  } from './SignUp'
import { SignUp as SignUp2 } from './SignUpTwo'

const SignUpOne = () => {

  const width = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <Text style={[styles.logo, {marginTop: 50}]}>acme</Text>
      <View style={[styles.copyContainer, { marginLeft: 0.1 * width }]}><Text style={styles.copy}>Ready? {"\n"}Let's go</Text></View>
      <View style={styles.formContainer}>
        <Apple />
        <View style={{ paddingVertical: 30 }}><Text style={{ fontWeight: '700' }}>or</Text></View>
        <SignUp label={'Sign up with e-mail'} />
        <Text>Already a member? <Text style={{ color: '#0742FF', fontWeight: '700' }}>Login</Text></Text>
      </View>
    </View>
  )
}

const SignUpTwo = ({route}) => {

  const navigation = useNavigation();
  const initialEmail = route.params.values.email;

  return (
    <View style = {styles.container}>
      <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 0.8 * useWindowDimensions().width, marginTop: 50}}>
        <TouchableOpacity onPress = {() => navigation.goBack()}><Ionicons name = 'arrow-back-outline' color = 'black' size = {50}/></TouchableOpacity>
        <Text style={styles.logo}>acme</Text></View>
      <SignUp2 initialEmail = {initialEmail} label = {'Sign Up'}/>
    </View>
  )
}

const Stack = createStackNavigator();

const App = () => {

  

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode = {false}>
        <Stack.Screen name = "SignUpOne" component = {SignUpOne}/>
        <Stack.Screen name = "SignUpTwo" component = {SignUpTwo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 100
  },

  logo: {
    fontWeight: '700',
    fontSize: 50,
  },

  copyContainer: {
    alignSelf: 'flex-start'
  },

  copy: {
    fontWeight: '700',
    fontSize: 35
  },

  formContainer: { 
    alignItems: 'center',
    marginBottom: 50
  }

})

export default App;
