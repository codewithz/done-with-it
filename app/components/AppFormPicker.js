import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import { AppPicker } from './AppPicker';
import { ErrorMessage } from './ErrorMessage';

export function AppFormPicker({items,name,numberOfColumns,PickerItemComponent,placeholder}) {
   const {errors,touched,values,setFieldValue} =useFormikContext();
 return (
     <React.Fragment>

        <AppPicker 
            items={items}
            PickerItemComponent={PickerItemComponent}
            onSelectItem={(item)=>setFieldValue(name,item)}
            placeholder={placeholder}
            selectedItem={values[name]}
            numberOfColumns={numberOfColumns}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}  />

     </React.Fragment>
    )
}

const styles = StyleSheet.create({
  container:{

    }
})