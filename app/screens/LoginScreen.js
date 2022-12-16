import { StyleSheet, Image } from 'react-native';
import React from 'react';
import Screen from '../componenets/Screen';
import AppTextInput from '../componenets/AppTextInput';
import AppButton from '../componenets/AppButton';
import {  Formik } from 'formik';
import * as Yup from 'yup';
import AppText from '../componenets/AppText';
import ErrorMessage from '../componenets/ErrorMessage';

const validationSchema =Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
        
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={handleChange('email')}
              textContentType='emailAddress'
              icon='email'
              placeholder='Email'
            />
            <ErrorMessage  error={errors.email}/>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry
              textContentType='password'
            />
          
             <ErrorMessage  error={errors.password}/>
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
