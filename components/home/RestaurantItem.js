import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRests = [
    {
        image: "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow=",
        name: "New Restaurant",
        rating: 4.5,
        timer:  "30-45 mins"
    }
];

function RestaurantItem({navigation, ...props}) {
    console.log(props.restaurantData.length)
    if (props.restaurantData.length == 0) {
        console.log(props.restaurantData)
        return (
            <View style = {{
                marginVertical: "45%",
                marginHorizontal: 20,
                backgroundColor:"white",
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'center',
                paddingHorizontal: 40,
                paddingVertical: 20
            }}>
                <Text style={{
                    color: 'red',
                    fontSize: 20,
                }}>No restaurants in this city. Try USA Cities to get results</Text>
            </View>
        )
    } else {
        return (
            <>
                {props.restaurantData.map((restaurant, index)=> (
                    <TouchableOpacity key={index} activeOpacity={1} style={{
                        marginBottom: 30
                    }} onPress={() =>navigation.navigate("RestaurantDetail")}>
                        <View style={{
                            marginTop: 15,
                            padding: 15,
                            backgroundColor: "white"
                        }}>
                            <RestaurantImage image={restaurant.image_url}/>
                            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} timer={restaurant.timer} />
                        </View>
                    </TouchableOpacity>
                ))}
            </>
        );
    }
}


const RestaurantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image
            }}  
            style={{
                width: "100%",
                height: 180
            }}  
        >        
        </Image>
        <TouchableOpacity style= {{
            position: 'absolute',
            right: 20,
            top: 20
        }}>
            <View style={{
                backgroundColor: "gray",
                borderRadius: 20,
                borderColor:"black",
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <MaterialCommunityIcons name="heart-outline" size={25} color="white" style={{
                    padding: 2
                }}/>
            </View>
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 10
    }}>
        <View>
            <Text style={{
                fontSize: 15,
                fontWeight: 'bold'
            }}>
                {props.name}
            </Text>
            <Text style={{fontSize: 13, color: 'gray'}}>{props.rating}</Text>
        </View>
        <View style= {{
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:15
        }}>
            <Text style>{props.rating}</Text>
        </View>
    </View>
)
export default RestaurantItem;

