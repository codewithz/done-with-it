import React,{useEffect} from 'react';
import { StyleSheet, View,Image,TouchableWithoutFeedback, Alert } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export function ImageInput({imageUri,onChangeImage}) {

    useEffect(()=>{
        requestPermission();
     }, [])

    const requestPermission=async ()=>{

        const result=await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if(!result.granted){
          alert('You need to enable permission to access the libreay')
        }
    
        // const result= await ImagePicker.requestCameraRollPermissionsAsync();
        //  if(!result.granted){
        //    alert('You need to enable permission to access the libreay')
        //  }
      }

    const handlePress= ()=>{
         if(!imageUri){
             selectImage();
         }
         else{
             Alert.alert('Delete','Are you sure you want to delete this image?',
             [
                 {text:'Yes',onPress:()=>onChangeImage(null)},
                 {text:'No'},
             ])
         }

    }

    const selectImage=async ()=>{
        try {
          const result=await ImagePicker.launchImageLibraryAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              quality:0.5
          });

          if(!result.cancelled){
             onChangeImage(result.uri)
          }
           
        } catch (error) {
          console.log('Error Reading an image',error);
        }
       
      }

 return (
     <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
          {!imageUri && <MaterialCommunityIcons
           name="camera" size={40} color={colors.medium} />}

          {imageUri && <Image source={{uri:imageUri}} 
          style={styles.image}/>}
      </View>
      </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:colors.light,
      borderRadius:15,
      width:100,
      height:100,
      justifyContent:'center',
      alignItems:'center',
      overflow:'hidden',

    },
    image:{
        width:'100%',
        height:'100%',
    }
})