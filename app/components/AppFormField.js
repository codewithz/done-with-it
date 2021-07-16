import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppTextInput } from './AppTextInput';
import { ErrorMessage } from './ErrorMessage';

export function AppFormField(props) {
 return (
     <React.Fragment>
         
         <AppTextInput
            // autoCapitalize="none"
            // autoCorrect={false}
            // icon="email"
            // placeholder="Email"
            // keyboardType="email-address"
            // textContentType="emailAddress"
            onChangeText={handleChange("email")}
            onBlur={()=>setFieldTouched("email")}
        
           />
         <ErrorMessage error={errors.email} visible={touched.email} />
     </React.Fragment>
    
    )
}

const styles = StyleSheet.create({

})