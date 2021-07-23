import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export function NewListButton(props) {
 return (
      <View style={styles.container}>
          <MaterialCommunityIcons name="plus-circle" color={colors.white} size={30}/>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:colors.primary,
      width:80,
      height:80,
      borderRadius:40,
      bottom:20,
      borderColor:colors.white,
      borderWidth:10,



    }
})