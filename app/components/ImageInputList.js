import React from 'react';
import {  StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ImageInput } from './ImageInput';
import { AppText } from './AppText';

export function ImageInputList({imageUris=[],onRemoveImage,onAddImage}) {
 return (
     <View>
     <ScrollView horizontal >
      <View style={styles.container}>
          {imageUris.map(uri=>(
              <View   key={uri} style={styles.image} >
              <ImageInput 
              imageUri={uri} 
            
              onChangeImage={()=>onRemoveImage(uri)}
              />
              </View>
              
          ))}
        <ImageInput onChangeImage={uri=>onAddImage(uri)} />
       
      </View>
      </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
      flexDirection:'row'

    },
    image:{
        marginRight:10,
    }
})