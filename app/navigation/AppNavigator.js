import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import { AccountScreen } from "../screens/AccountScreen";
import { ListingEditScreen } from "../screens/ListingEditScreen";
import { ListingsScreen } from "../screens/ListingsScreen";
import { NewListButton } from "../components/NewListButton";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";


const Tab=createBottomTabNavigator();

const AppNavigator= ()=>(
    <Tab.Navigator>
        <Tab.Screen name="Listings" component={FeedNavigator}
        options={
            {
                tabBarIcon:({color,size})=> 
                <MaterialCommunityIcons 
                name="home" color={color} 
                size={size}/>
            }
        }
        />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen}
           options={ ({navigation})=>({
                tabBarButton:()=> (
               <NewListButton 
                onPress={()=>navigation.navigate("ListingEdit")} />
                ),
                tabBarIcon:({color,size})=> 
                <MaterialCommunityIcons name="plus-circle" color={color} size={size}/>
            
                 })
                }
        />
        <Tab.Screen name="Account" component={AccountNavigator}
               options={
                {
                   
                    tabBarIcon:({color,size})=> 
                    <MaterialCommunityIcons name="account" color={color} size={size}/>
                }
            }
        />
    </Tab.Navigator>
)

export default AppNavigator;