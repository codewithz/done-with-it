import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import colors from '../config/colors'

import { AppText } from './AppText'

export  function ListItem({title,subtitle,image}) {
    return (
        <View style={styles.container}>
           <Image style={styles.image} source={image}></Image>
           <View>
               <AppText style={styles.title} >{title}</AppText>
               <AppText style={styles.subtitle}>{subtitle}</AppText>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
     
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
