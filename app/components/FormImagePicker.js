import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';
import { ErrorMessage } from './ErrorMessage';
import { ImageInputList } from './ImageInputList';

export function FormImagePicker({name}) {
    const {errors,touched,values,setFieldValue} =useFormikContext();

    const handleAdd =(uri)=>{
        setFieldValue(name,[...values[name],uri])
      }
    
    const handleRemove =(uri) =>{
        setFieldValue(name,values[name].filter((imageUri)=>imageUri!== uri))
      }
 return (
    <>
        <ImageInputList imageUris={values[name]}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
        />
          <ErrorMessage error={errors[name]} visible={touched[name]}  />
    </>
 )
}

const styles = StyleSheet.create({
  container:{

    }
})