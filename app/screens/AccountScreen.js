import React from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native'

import { Screen } from '../components/Screen';
import { ListItem } from '../components/ListItem';
import { Icon } from '../components/Icon';
import colors from '../config/colors';

const menuItems=[
    {
        title:'My Listing',
        icon:{
            name:'format-list-bulleted',
            backgroundColor:colors.primary
        }
    }
]

export  function AccountScreen() {
    return (
       <Screen>
        <View style={styles.container}>
            <ListItem 
            title="Zartab M Nakhwa"
            subtitle="zartab@codewithz.com"
            image={require('../assets/zartab.jpg')}
            />
        </View>
        <View style={styles.container}>

        <FlatList
            data={menuItems}
            keyExtractor={menuItem=>menuItem.title}
            renderItem={({item})=>
            <ListItem
                title={item.title}
                ImageComponent={
                    <Icon 
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                    />
                }
            />
        }
        >


        </FlatList>
        </View>

       </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
    }
})
