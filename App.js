
import React from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';

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
import { ListingsScreen } from './app/screens/ListingsScreen';

export default function App() {


  return (
    <Screen>
    
    <ListingsScreen></ListingsScreen>
    </Screen>

  );
}

const styles = StyleSheet.create({
  
});
