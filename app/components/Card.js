import React from 'react';
import { View,StyleSheet,Image,TouchableWithoutFeedback } from 'react-native'
import colors from '../config/colors';

import { AppText } from './AppText';
export function Card({title,subTitle,imageUrl,onPress}) {
    return (
    <TouchableWithoutFeedback onPress={onPress}>
       <View style={styles.card}>
           <Image style={styles.image} source={{uri:imageUrl}}></Image>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
       </View>
    </TouchableWithoutFeedback>
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

