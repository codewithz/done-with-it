import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,FlatList,ActivityIndicator} from 'react-native'

import { Screen } from '../components/Screen'
import { Card } from '../components/Card'
import colors from '../config/colors'
import listingsApi from '../api/listings';
import { AppText } from '../components/AppText'
import { AppButton } from '../components/AppButton'
import { AppActivityIndicator } from '../components/AppActivityIndicator'


export  function ListingsScreen({navigation}) {

    const [listings,setListings]=useState([]);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);


    const loadListings= async()=>{
        setLoading(true);
        const response =await listingsApi.getListings();
        setLoading(false);
        if(!response.ok){
            setError(true);
           return;
        }
        else{
            setError(false);
            setListings(response.data);
        }
    }

    useEffect(() => {
        loadListings();
    },[]);

    return (
       <Screen style={styles.screen}>
           {error && 
           <>
           <AppText>Couldn't retrive listings</AppText>
           <AppButton title="Retry" onPress={loadListings}/>
           </>}

          <AppActivityIndicator visible={true} />

           { <FlatList
            data={listings}
            keyExtractor={listing=>listing.id.toString()}
            renderItem={
                ({item})=>
                <Card
                    title={item.title}
                    subTitle={"$"+item.price}
                    imageUrl={item.images[0].url} 
                    onPress={()=>navigation.navigate("ListingDetails",item)}
                    />
            }
           
           >
           </FlatList> }


       </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light
    }
})
