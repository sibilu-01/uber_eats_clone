import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';


const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://assets3.thrillist.com/v1/image/1202445/1200x600/scale;"
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://assets3.thrillist.com/v1/image/1202445/1200x600/scale;"
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://assets3.thrillist.com/v1/image/1202445/1200x600/scale;"
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://assets3.thrillist.com/v1/image/1202445/1200x600/scale;"
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://assets3.thrillist.com/v1/image/1202445/1200x600/scale;"
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://assets3.thrillist.com/v1/image/1202445/1200x600/scale;"
    }
]

function MenuItem(props) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food={food}/>
                        <FoodImage food={food}/>
                    </View>
                    <Divider width={0.5} orientation='="vertical' style= {{
                        marginHorizontal: 20
                    }}/>
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = ({food}) => (
    <View style={{
        width: '75%'
    }}>
        <Text style={styles.title}>{food.title}</Text>
        <Text style={styles.otherText}>{food.description}</Text>
        <Text style={styles.otherText}>{food.price}</Text>
    </View>
)

const FoodImage = ( {food} )=> (
    <Image
        source={{
            uri: food.image
        }}
        style={{
            height: "80%",
            width: "20%",
            marginTop: 10,
            marginHorizontal: 10,
            borderRadius: 10
        }}
    />
)
const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        // backgroundColor: "#dbd7ce",
        borderRadius: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginHorizontal: 20
    },
    otherText: {
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 20
    }
})

export default MenuItem;