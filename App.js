import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { WelcomeScreen } from './app/screens/WelcomeScreen';
import { ViewImageScreen } from './app/screens/ViewImageScreen';
import { ListingDetailsScreen } from './app/screens/ListingDetailsScreen';
import { AppButton } from './app/components/AppButton';
import { Card } from './app/components/Card';

export default function App() {
  return (
   
      <ListingDetailsScreen></ListingDetailsScreen>




  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100,

  },
});
