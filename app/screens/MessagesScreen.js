import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native'

import { ListItem } from '../components/ListItem'
import { ListItemSeparator } from '../components/ListItemSeparator'
import { ListItemDeleteAction } from '../components/ListItemDeleteAction'

const initialMessages=[
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

    const [messages,setMessages]=useState(initialMessages);
    const [refreshing,setRefreshing]=useState(false);

    const handleDelete = (message)=>{
        //Delete the message from the array 
        const filteredMessages =messages.filter(m=>m.id !==message.id);
        setMessages(filteredMessages);


        //Call the server to delete it from DB
    }


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
                 <ListItemDeleteAction 
                    onPress={()=> handleDelete(item)}
                 />
                )}
                
            />
        }
        ItemSeparatorComponent={()=>
            <ListItemSeparator/>
        }
        refreshing={refreshing}
        onRefresh={()=>{
            setMessages([...initialMessages,
                {
                    id:4,
                    title:'Title 4',
                    description:'Description for List #4',
                    image:require("../assets/zartab.jpg")
                },
                {
                    id:5,
                    title:'Title 5',
                    description:'Description for List #5',
                    image:require("../assets/zartab.jpg")
                }
            ])
        }
        }

     >

     </FlatList>
     </View>
    )
}

const styles = StyleSheet.create({})
