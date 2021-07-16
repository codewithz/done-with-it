import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import { AppButton } from './AppButton';

export function SubmitButton({title}) {
    const {handleSubmit}=useFormikContext();
 return (
      <AppButton title={title} onPress={handleSubmit} />
    )
}

const styles = StyleSheet.create({
 
})