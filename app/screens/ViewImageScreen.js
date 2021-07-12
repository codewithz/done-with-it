import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            
            <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" size={35} color="white" />
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" size={35} color="red" />
            </View>
            
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
        top:40,
        left:30,
        position:'absolute',

    },
    deleteIcon:{
      
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

