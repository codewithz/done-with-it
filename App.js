
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,StatusBar,TextInput,Switch} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { WelcomeScreen } from './app/screens/WelcomeScreen';
import { ViewImageScreen } from './app/screens/ViewImageScreen';
import { ListingDetailsScreen } from './app/screens/ListingDetailsScreen';
import { AppButton } from './app/components/AppButton';
import { Card } from './app/components/Card';
import { MessagesScreen } from './app/screens/MessagesScreen';
import Constants from 'expo-constants';
import { Screen } from './app/components/Screen';

import { Icon } from './app/components/Icon';
import { ListItem } from './app/components/ListItem';
import { AccountScreen } from './app/screens/AccountScreen';
//import { ListingsScreen } from './app/screens/ListingsScreen';
import { AppTextInput } from './app/components/AppTextInput';
import { AppPicker } from './app/components/AppPicker';
import { LoginScreen } from './app/screens/LoginScreen';
import { RegisterScreen } from './app/screens/RegisterScreen';
import { ListingEditScreen } from './app/screens/ListingEditScreen';



export default function App() {

  const requestPermission=async ()=>{
    const result= await ImagePicker.requestCameraRollPermissionsAsync();
     if(!result.granted){
       alert('You need to enable permission to access the libreay')
     }
  }

  useEffect(async ()=>{
     requestPermission();
  }, [])
  
  return (
    <Screen></Screen>
  );
}

const styles = StyleSheet.create({
  
});
