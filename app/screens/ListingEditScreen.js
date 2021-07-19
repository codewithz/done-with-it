import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { Screen } from '../components/Screen';
import { AppForm } from '../components/AppForm';
import { AppFormField } from '../components/AppFormField';
import { AppFormPicker } from '../components/AppFormPicker';
import { values } from 'lodash';
import { SubmitButton } from '../components/SubmitButton';
import { CategoryPickerItem } from '../components/CategoryPickerItem';

const validationSchema=Yup.object().shape({
    title:Yup.string().required().min(1).label("Title"),
    price:Yup.number().required().min(1).max(10000).label("Price"),
    description:Yup.string().label("Description"),
    category:Yup.object().required().nullable().label("Category")

})

const categories = [
    { label: "Furniture", value: 1 ,backgroundColor:"red",icon:"email"},
    { label: "Clothing", value: 2 ,backgroundColor:"green",icon:"lock"},
    { label: "Camera", value: 3 ,backgroundColor:"blue",icon:"apps"},
  ];


export function ListingEditScreen(props) {
 return (
      <Screen style={styles.container}>

          <AppForm
            initialValues={{
                title:"",
                price:"",
                description:"",
                category:null
            }}
            onSubmit={(values)=>console.log(values)}
            validationSchema={validationSchema}
          
          >

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