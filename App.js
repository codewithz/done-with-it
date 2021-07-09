import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {WelcomeScreen} from './app/screens/WelcomeScreen';
import {ViewImageScreen} from './app/screens/ViewImageScreen';
import { AppButton } from './app/components/AppButton';

export default function App() {
  return (
    <View style={styles.container}>
    <AppButton title="Login" 
    onPress={()=>{console.log('Login Button')}}>
      
    </AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
