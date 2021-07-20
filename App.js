
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,StatusBar,TextInput,Switch,Button,Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';



export default function App() {

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
