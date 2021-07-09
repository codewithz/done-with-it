import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors';

export function AppButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} 
        onPress={onPress}>
            <View >
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 15,

    },
    text: {
        color: colors.white,
        textTransform: 'uppercase',
    }
})
