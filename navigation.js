import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import RestaurantDetail from './screens/RestaurantDetail';
import Home from './screens/Home';

function Navigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;