import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/home/Header';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItem, { localRests } from '../components/home/RestaurantItem';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';
import { YELP_KEY } from "@env";
console.log(YELP_KEY);

export default function Home({navigation}) {
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
            Authorization: `Bearer ${YELP_KEY}`
        },
    }
    return fetch(yelp, apiOptions).
        then(
            (res) => res.json()
        ).
        then(
            (json)=>{
                if (json.businesses != null) {
                    setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase().replace(" ",""))))
                }
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
        <RestaurantItem restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs></BottomTabs>
    </SafeAreaView>
  );
}
