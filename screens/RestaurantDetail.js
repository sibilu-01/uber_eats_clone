import React from 'react';
import { Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';

function RestaurantDetail(props) {
    return (
        <View>
            <About/>
            <Divider width={1} style={{
                marginTop: 15
            }}></Divider>
            <MenuItem/>
        </View>
    );
}

export default RestaurantDetail;