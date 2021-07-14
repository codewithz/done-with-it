import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native'

import { ListItem } from '../components/ListItem'
import { ListItemSeparator } from '../components/ListItemSeparator'

const messages=[
    {
        id:1,
        title:'Title 1',
        description:'Description for List #1',
        image:require("../assets/zartab.jpg")
    },
    {
        id:2,
        title:'Title 2',
        description:'Description for List #2',
        image:require("../assets/zartab.jpg")
    },
    {
        id:3,
        title:'Title 3',
        description:'Description for List #3',
        image:require("../assets/zartab.jpg")
    },
]

export  function MessagesScreen(props) {
    return (
    <View>
     <FlatList
        data={messages}
        keyExtractor={(message)=>message.id.toString()}
            
        renderItem={({item})=>
            <ListItem
                title={item.title}
                subtitle={item.description}
                image={item.image}
                onPress={()=>{
                    console.log('List Item Pressed',item)
                }}
                renderRightActions={()=>(
                    <View style={{
                        backgroundColor:'red',
                        width:70,
                    }}></View>
                )}
            />
        }
        ItemSeparatorComponent={()=>
            <ListItemSeparator/>
        }
     >

     </FlatList>
     </View>
    )
}

const styles = StyleSheet.create({})
