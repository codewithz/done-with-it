
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,StatusBar,TextInput,Switch,Button,Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

import { Screen } from './app/components/Screen';

const Link = ()=> {
  const navigation=useNavigation();
return(
  <Button title="Click Me" 
    onPress={()=>navigation.navigate("TweetDetails")}
  />
);
}

const Tweets= ({navigation})=>(
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails= ()=>(
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);


const Stack=createStackNavigator();

const StackNavigator=()=>(
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="TweetDetails" component={TweetDetails}/>
    <Stack.Screen name="Tweets" component={Tweets}/>
  </Stack.Navigator>
)


export default function App() {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
