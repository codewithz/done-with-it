import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { Formik, yupToFormErrors } from 'formik'
import * as Yup from 'yup';

import { AppTextInput } from '../components/AppTextInput'
import { AppButton } from '../components/AppButton'
import { AppText } from '../components/AppText';
import { ErrorMessage } from '../components/ErrorMessage';


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
            {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>
            (
             <React.Fragment>

            <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={handleChange("email")}
            onBlur={()=>setFieldTouched("email")}
        
           />
         <ErrorMessage error={errors.email} visible={touched.email} />

           <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            onChangeText={handleChange("password")}
            onBlur={()=>setFieldTouched("password")}
           />
        <ErrorMessage error={errors.password}  visible={touched.password}/>

           <AppButton title="Login" 
           onPress={handleSubmit}
           />


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
