import React,{useEffect,useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import * as Location from 'expo-location';
import listingApi from '../api/listings';

import { Screen } from '../components/Screen';
import { AppForm } from '../components/AppForm';
import { AppFormField } from '../components/AppFormField';
import { AppFormPicker } from '../components/AppFormPicker';
import { values } from 'lodash';
import { SubmitButton } from '../components/SubmitButton';
import { CategoryPickerItem } from '../components/CategoryPickerItem';
import { FormImagePicker } from '../components/FormImagePicker';
import listings from '../api/listings';


const validationSchema=Yup.object().shape({
    title:Yup.string().required().min(1).label("Title"),
    price:Yup.number().required().min(1).max(10000).label("Price"),
    description:Yup.string().label("Description"),
    category:Yup.object().nullable().label("Category"),
    images:Yup.array().min(1,"Please select atleast one image")

})


const categories = [
    { label: "Furniture", value: 1 ,backgroundColor:"#fc5c65",icon:"floor-lamp"},
    { label: "Cars", value: 2 ,backgroundColor:"#fd9644",icon:"car"},
    { label: "Cameras", value: 3 ,backgroundColor:"#fed330",icon:"camera"},
    { label: "Games", value: 4 ,backgroundColor:"#26de81",icon:"cards-playing-outline"},
    { label: "Clothing", value: 5 ,backgroundColor:"#2bcbba",icon:"shoe-heel"},
    { label: "Sports", value: 6 ,backgroundColor:"#45aaf2",icon:"basketball"},
    { label: "Movies & Music", value: 7 ,backgroundColor:"#4b7bec",icon:"headphones"},
   
  ];


export function ListingEditScreen() {

   

    const [location,setLocation]=useState();

    const handleSubmit = async (listing)=>{
       const result=await listingApi.addListing({...listing,location},
        (progress)=>console.log('LES'+progress)
        );
       if(!result.ok){
           console.log(result)
          alert('Could not save listing');
          return; 
       }
       else{
           alert('Success');
       }
    }

    const getLocation = async ()=>{
        const result=await Location.requestPermissionsAsync();
        if(!result.granted){
            return;
        }
        else{
            const result=await Location.getCurrentPositionAsync();
            console.log("Location",result)
            setLocation({
                latitude:result.coords.latitude,
                longitude:result.coords.longitude});
            
        }
    }
    useEffect(()=>{
        getLocation();
    },[])

 return (
      <Screen style={styles.container}>

          <AppForm
            initialValues={{
                title:"",
                price:"",
                description:"",
                category:null,
                images:[]
            }}
          //  onSubmit={(values)=>console.log(location,values)}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          
          >

            <FormImagePicker name="images" />
        
            <AppFormField 
                name="title"
                placeholder="Title"
                maxLength={255}
            />

            <AppFormField 
                name="price"
                placeholder="Price"
                keyboardType="numeric"
                maxLength={8}

            />
            <AppFormPicker 
                items={categories}
                name="category"
                placeholder="Category"
                PickerItemComponent={CategoryPickerItem}
                numberOfColumns={3}
            />

            <AppFormField 
                name="description"
                maxLength={255}
                multiline
                numberOfLines={3}
                placeholder="Description"

            />

            <SubmitButton title="Post" />



          </AppForm>

      </Screen>
    )
}

const styles = StyleSheet.create({
  container:{
        padding:10,
    }
})