import React from 'react'
import { StyleSheet, Text, View ,TextInput, Platform} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'


export  function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
         {icon &&  <MaterialCommunityIcons name={icon}
                    size={20} color={colors.medium}
                     style={styles.icon}
         
         />}
           <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:colors.light,
        borderRadius:25,
        width:"100%",
        padding:15,
        marginVertical:10,
    },
    icon:{
        marginRight:10,
    },
    textInput:{
        fontSize:18,
        fontFamily:Platform.OS==="android"?"Roboto":"Avenir",
        color:colors.dark,
    }

})
