
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

export default function App() {


  return (
    <Screen>
      <Icon 
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white"
      ></Icon>
 
    </Screen>

  );
}

const styles = StyleSheet.create({
  
});
