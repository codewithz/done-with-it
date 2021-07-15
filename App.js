
import React,{useState} from 'react';
import { StyleSheet, Text, View ,StatusBar,TextInput} from 'react-native';

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

export default function App() {

  const [firstName,setFirstName]=useState("");
  return (
    <Screen>

    <TextInput
      placeholder="First Name"
      style={{
        borderBottomColor:"#000",
        borderBottomWidth:1,

      }}
      onChangeText={(text)=>setFirstName(text)}
      secureTextEntry
     
    
    >

    </TextInput>
    <Text>{firstName}</Text>

    <TextInput
    placeholder="Test"
    style={{
      borderBottomColor:"red",
      borderBottomWidth:1,

    }}
    keyboardType="numeric"
    clearButtonMode="always"
    >

    </TextInput>
   
    
    </Screen>

  );
}

const styles = StyleSheet.create({
  
});
