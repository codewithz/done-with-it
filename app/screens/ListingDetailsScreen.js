import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

import { AppText } from '../components/AppText';
import { ListItem } from '../components/ListItem';
import colors from '../config/colors';


export function ListingDetailsScreen({route}) {

    const listing=route.params;
    return (
        <View>
            <Image source={listing.image}
                style={styles.image}>
            </Image>

            <View style={styles.detailsContainer}> 
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
            </View>

            <View style={styles.userContainer}>
                <ListItem  image={require("../assets/zartab.jpg")} 
                title="Zartab Nakhwa" subtitle="5 Listings"/>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer:{
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:"500",
    },
    price:{
        color:colors.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
    },
    userContainer:{
        marginVertical:10,
        padding:20,
    }
})
