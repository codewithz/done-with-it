import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { Formik } from 'formik'

import { AppTextInput } from '../components/AppTextInput'
import { AppButton } from '../components/AppButton'


import { Screen } from '../components/Screen'

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
           >
            {({handleChange,handleSubmit})=>
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
           />

           <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            onChangeText={handleChange("password")}
           />

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
