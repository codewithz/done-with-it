import React from 'react'
import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors'

import { AppText } from './AppText'

export  function ListItem({title,subtitle,image,onPress,renderRightActions}) {
    return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight 
    onPress={onPress}
    underlayColor={colors.light}>
        <View style={styles.container}>
           <Image style={styles.image} source={image}></Image>
           <View>
               <AppText style={styles.title} >{title}</AppText>
               <AppText style={styles.subtitle}>{subtitle}</AppText>
           </View>
        </View>
    </TouchableHighlight>
    </Swipeable>
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        padding:20,
     
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10,
    },
    subtitle:{
        color:colors.medium,
    },
    title:{
        fontWeight:'600',
    }
})
