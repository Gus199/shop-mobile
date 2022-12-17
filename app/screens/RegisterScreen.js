import { StyleSheet, Image } from 'react-native';
import React from 'react';
import Screen from '../componenets/Screen';
import * as Yup from 'yup';
import {AppForm,AppFormField,SubmitButton} from '../componenets/Forms'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  confrimPassword: Yup.string().required().min(4).label('Confirm Password'),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{ email: '', password: '', confrimPassword: '' }}
        onSubmit={() => console.log('Pressed')}
        validationSchema={validationSchema}
      >
        <AppFormField
          name='email'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          textContentType='emailAddress'
          icon='email'
          placeholder='Email'
        />

        <AppFormField
          name='password'
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <AppFormField
          name='confrimPassword'
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          placeholder='Confirm Password'
          secureTextEntry
          textContentType='password'
        />

        <SubmitButton title='Register' />
      </AppForm>
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

export default RegisterScreen;
