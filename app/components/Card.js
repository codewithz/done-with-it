import React from 'react';
import { View,StyleSheet,Image } from 'react-native'
import colors from '../config/colors';

import { AppText } from './AppText';
export function Card({title,subTitle,image}) {
    return (
       <View style={styles.card}>
           <Image style={styles.image} source={image}></Image>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
       </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20
    },
    image:{
        width:'100%',
        height:200,
        borderRadius:15,
    },
    title:{
        marginBottom:7,
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:'bold',
    }
  
})

