import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { Formik, yupToFormErrors } from 'formik'
import * as Yup from 'yup';

import { AppTextInput } from '../components/AppTextInput'
import { AppButton } from '../components/AppButton'
import { AppText } from '../components/AppText';
import { ErrorMessage } from '../components/ErrorMessage';
import { AppFormField } from '../components/AppFormField';
import { SubmitButton } from '../components/SubmitButton';


import { Screen } from '../components/Screen'

const validationSchema=Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})

export  function LoginScreen(props) {

   
    return (
       <Screen style={styles.container}>
           <Image
            source={require('../assets/logo-red.png')}
            style={styles.logo}
            
           ></Image>

           <Formik
            initialValues={{email:'',password:''}}
            onSubmit={values=>console.log(values)}
            validationSchema={validationSchema}
           >
            {()=>
            (
             <React.Fragment>

            <AppFormField 
                 name="email"
                 autoCapitalize="none"
                 autoCorrect={false}
                 icon="email"
                 placeholder="Email"
                 keyboardType="email-address"
                 textContentType="emailAddress"
            />


           <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            
           />
        

            <SubmitButton title="Login" />


            </React.Fragment>
            )
            }
           </Formik>

          
       </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    logo:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:50,
    }
})
