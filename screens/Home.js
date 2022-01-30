import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem, { localRests } from '../components/RestaurantItem';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/BottomTabs';

const YELP_API_KEY="hVYsH5HEqDli8TkHLcp-peWvC9ZJSdMF2Sx9zDKvLlV14Na7xidhkZ5-RSsAAVrMdl6S9ZJIkfQs6w3qhu0jZtoD11PZpeSsZZcAI3BHieaSyxcMWElEvjli1pLzYXYx"


export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRests);
    const [city, setCity] = useState("Newyork");
    const [activeTab, setActiveTab] = useState("Delivery");
    useEffect (()=> {
        getRestaurantsFromYelp();
        console.log(activeTab);
    }, [city, activeTab])
  const getRestaurantsFromYelp = () => {
    const yelp = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const apiOptions = {
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`
        },
    }
    return fetch(yelp, apiOptions).
        then(
            (res) => res.json()
        ).
        then(
            (json)=>{
                setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase().replace(" ",""))))
            }
        ).catch(err =>
            console.error(err)
        )
    }
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{ backgroundColor: "white", padding: 15}}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItem restaurantData={restaurantData}/>
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs></BottomTabs>
    </SafeAreaView>
  );
}
