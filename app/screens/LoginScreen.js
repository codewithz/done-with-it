import React, { useState } from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

import { AppTextInput } from '../components/AppTextInput'
import { AppButton } from '../components/AppButton'


import { Screen } from '../components/Screen'

export  function LoginScreen(props) {

    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    return (
       <Screen style={styles.container}>
           <Image
            source={require('../assets/logo-red.png')}
            style={styles.logo}
           ></Image>

           <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={(text)=>setUsername(text)}
           />

           <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            onChangeText={(text)=>setPassword(text)}
           />

           <AppButton title="Login" 
           onPress={()=>{console.log('Login Pressed',username,password)}}
           />

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
