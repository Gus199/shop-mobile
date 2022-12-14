import React from 'react';
import { StyleSheet } from 'react-native';
import AppTextInput from '../TextInput';

import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue,  errors, touched, values } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});

export default AppFormField;
