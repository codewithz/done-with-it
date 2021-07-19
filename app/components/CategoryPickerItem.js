import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';

import { Icon } from './Icon';
import { AppText } from './AppText';

export function CategoryPickerItem({item,label,onPress}) {
 return (
      <View style={styles.container}>
         <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}></Icon>
         <AppText>{item.label}</AppText>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{

    }
})