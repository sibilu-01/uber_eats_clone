import React from 'react';
import { Image, Text, View } from 'react-native';

//const image = "https://d3aux7tjp119y2.cloudfront.net/original_images/Tak2-CMSTemplate_IrMZHla.jpg"
// const title = "Farmhouse Kitchen"
// const descr = 'Thai . Comfort Food . $$ . 4 (2913+)'

const yelpRestaurnat = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://d3aux7tjp119y2.cloudfront.net/original_images/Tak2-CMSTemplate_IrMZHla.jpg",
    price: "$$",
    reviews: '1500',
    rating: 5,
    categories: [{title: 'Thai'}, {title: 'Comfort Food'}],
}
const { name, image, price, reviews, rating, categories} = yelpRestaurnat;

const formatCategories = categories.map((cat) => cat.title).join(" . ");

const description = `${formatCategories} ${price ? " . " + price: ""} . 🎫 . ${rating} 🌟 (${reviews}+)`;

function About(props) {
    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantName name={name}/>
            <RestaurnatDescr description={description}/>
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image 
        source={{
            uri: props.image
        }}
        style={{
            width: "100%",
            height: 200
        }}
    />
)

const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15
        }}    
    >
        {props.name}
    </Text>
)

const RestaurnatDescr = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 20.5
        }}
    >
        {props.description}
    </Text> 
)
export default About;

