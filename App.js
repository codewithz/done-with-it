
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

export default function App() {


  return (
    <Screen>
    <MessagesScreen></MessagesScreen>
    </Screen>

  );
}

const styles = StyleSheet.create({
  
});
