import React from 'react';
import {ImageBackground,StyleSheet,View,Image,Text} from 'react-native';

import { AppButton } from '../components/AppButton';

import colors from '../config/colors';
export function WelcomeScreen(props) {
    return (
       <ImageBackground style={styles.background}
        source={require('../assets/background.jpg')}
        blurRadius={2}
       >
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')}>
        </Image>

        <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}> 
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary"/>
        </View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    buttonContainer:{
        padding:20,
        width:'100%',
    },
    loginButton:{
        width:'100%',
        height:70,
        backgroundColor:colors.primary,
    },
    registerButton:{
        width:'100%',
        height:70,
        backgroundColor:colors.secondary,
    },
    logo:{
        width:80,
        height:80,
    },
    logoContainer:{
        position:'absolute',
        top:50,
        alignItems:'center',
    },
    tagline:{
        fontSize:25,
        fontWeight:'600',
        paddingVertical:20,
    }
});

