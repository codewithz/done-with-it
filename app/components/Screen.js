import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

export function Screen({ children }) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
    },

})
