import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

export function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            
            <Image
                style={styles.image}
                source={require("../assets/chair.jpg")}
                resizeMode={'contain'}
            >

            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon:{
        width:50,
        height:50,
        backgroundColor:colors.primary,
        top:40,
        left:30,
        position:'absolute',

    },
    deleteIcon:{
        width:50,
        height:50,
        backgroundColor:colors.secondary,
        top:40,
        right:30,
        position:'absolute',

    },
    container: {
        backgroundColor: '#000',
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%',

    }
})

