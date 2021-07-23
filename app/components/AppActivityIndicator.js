import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export function AppActivityIndicator({visible=false}) { 
    if(!visible){
        return null;
    }
 return (
      <LottieView 
      source={require("../assets/animations/loader.json")} 
      autoPlay
      loop
      />
 )

 }