import React, { Children } from 'react';
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';

export function AppForm({initialValues,onSubmit,
    validationSchema,children}) {
 return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
        {()=>(
            <React.Fragment>
                {children}
            </React.Fragment>
        )}

    </Formik>
    )
}

const styles = StyleSheet.create({
 
})