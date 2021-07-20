
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,StatusBar,TextInput,Switch,Button,Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Screen } from './app/components/Screen';

const Link = ()=> {
  const navigation=useNavigation();
return(
  <Button title="Click Me" 
    onPress={()=>navigation.navigate("TweetDetails",{id:1,name:'Zartab'})}
  />
);
}

const Tweets= ({navigation})=>(
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const Account= ()=>(
  <Screen>
    <Text>Account</Text>
  </Screen>
)

const TweetDetails= ({route})=>(
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);




const Stack=createStackNavigator();

const StackNavigator=()=>(
  <Stack.Navigator initialRouteName="Tweets" 
    screenOptions={
      {
        headerStyle:{
          backgroundColor:'dodgerblue'
        },
        headerTintColor:"white",
        
      }
    }
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails"
     component={TweetDetails}
     options={({route})=>({title:route.params.name})}
     />
  </Stack.Navigator>
)

const Tab=createBottomTabNavigator();
const TabNavigator =()=>(
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor:'tomato',
      activeTintColor:'white',
      inactiveBackgroundColor:'#eee',
      inactiveTintColor:'black',


    }}
  >
    <Tab.Screen name="Feed" component={Tweets}/>
    <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
)


export default function App() {

  return (
    <NavigationContainer>
     <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
