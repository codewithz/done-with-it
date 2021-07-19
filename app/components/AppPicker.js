import React, { useState } from 'react'
import { StyleSheet, Text, View ,Button,TextInput,FlatList, Platform,TouchableWithoutFeedback,Modal} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import { AppText } from './AppText'
import { Screen } from './Screen'
import { PickerItem } from './PickerItem'


export  function AppPicker({icon,items,placeholder,PickerItemComponent=PickerItem,selectedItem,onSelectItem}) {

    const [modalVisible,setModalVisible]=useState(false);
    return (
        <React.Fragment>
            <TouchableWithoutFeedback 
            onPress={()=>setModalVisible(true)}>
            <View style={styles.container}>
            {icon &&  <MaterialCommunityIcons 
            name={icon}
                        size={20} color={colors.medium}
                        style={styles.icon}
            
            />}
            <AppText 
            style={styles.text}>{selectedItem ? selectedItem.label :placeholder}</AppText>
            <MaterialCommunityIcons 
                name="chevron-down"
                size={20}
                color={colors.medium}
                style={styles.icon}
            
            />
            </View>
            </TouchableWithoutFeedback>
            <Modal 
            visible={modalVisible}
            animationType="slide"
            >
                <Screen>
                <Button title="Close" 
                onPress={()=>setModalVisible(false)}/>

                <FlatList
                data={items}
                keyExtractor={item=>item.value.toString()}
                renderItem={({item})=>
                <PickerItemComponent
                    item={item}
                    label={item.label}
                    onPress={()=>{
                        setModalVisible(false);
                        onSelectItem(item)

                    }}
                />
            
            }
                />


                </Screen>
            </Modal>
        </React.Fragment>
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
    },
    text:{
        flex:1
    }

})
