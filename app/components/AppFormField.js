import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import { AppTextInput } from './AppTextInput';
import { ErrorMessage } from './ErrorMessage';


export function AppFormField({name,...otherProps}) {
    const {handleChange,errors,setFieldTouched,touched}=useFormikContext();
 return (
     <React.Fragment>
         
         <AppTextInput
            onChangeText={handleChange(name)}
            onBlur={()=>setFieldTouched(name)}
            {...otherProps}
        
           />
         <ErrorMessage error={errors[name]} visible={touched[name]} />
     </React.Fragment>
    
    )
}

const styles = StyleSheet.create({

})