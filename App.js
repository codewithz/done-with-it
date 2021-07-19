
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,StatusBar,TextInput,Switch,Button,Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

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
import { ImageInput } from './app/components/ImageInput';



export default function App() {

 const [imageUri,setImageUri] =useState();

  const requestPermission=async ()=>{

    const result=await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if(!result.granted){
      alert('You need to enable permission to access the libreay')
    }

    // const result= await ImagePicker.requestCameraRollPermissionsAsync();
    //  if(!result.granted){
    //    alert('You need to enable permission to access the libreay')
    //  }
  }

  useEffect(()=>{
     requestPermission();
  }, [])

  const selectImage=async ()=>{
    try {
      const result=await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled){
          setImageUri(result.uri);
      }
       
    } catch (error) {
      console.log('Error Reading an image',error);
    }
   
  }
  
  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage}/>
      <Image source={{uri:imageUri}} style={{width:200,height:200}}/>
      <ImageInput imageUri={imageUri}/>
     
    </Screen>
  );
}

const styles = StyleSheet.create({
  
});
