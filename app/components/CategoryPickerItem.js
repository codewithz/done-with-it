import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';

import { Icon } from './Icon';
import { AppText } from './AppText';

export function CategoryPickerItem({item,label,onPress}) {
 return (
      <View style={styles.container}>
         <Icon backgroundColor={item.backgroundColor} name={item.icon} size={70}></Icon>
         <AppText style={styles.label}>{item.label}</AppText>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
      paddingHorizontal:30,
      paddingVertical:15,
      alignItems:'center',
      width:'33%',


    },
    label:{
        marginTop:5,
        textAlign:'center',
    }
})