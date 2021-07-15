
import React,{useState} from 'react';
import { StyleSheet, Text, View ,StatusBar,TextInput,Switch} from 'react-native';

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
export default function App() {

  const [isNew,setIsNew]=useState(false);
  return (
    <Screen>
      <AppPicker placeholder="Category" icon="apps"></AppPicker>
      <AppTextInput placeholder="Email" />
    </Screen>

  );
}

const styles = StyleSheet.create({
  
});
