import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { FONTS, COLORS, FONT_SIZES } from '../constants';

// Components
import FocusedStatusBar from './FocusedStatusBar';
import HomeHeader from './HomeHeader';


const data = [
    {
        id:1,
        name:"Cappuccino",
        image_url:"https://images.pexels.com/photos/13242090/pexels-photo-13242090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "$3.00",
        category:"Without milk",
    },
    {
        id: 2,
        name: "Cappuccino",
        image_url: "https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "$3.00",
        category:"Without milk",
    },
    {
        id: 3,
        name: "Cappuccino",
        image_url: "https://images.pexels.com/photos/9707479/pexels-photo-9707479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "$3.00",
        category:"Without milk",
    },
    {
        id: 4,
        name: "Cappuccino",
        image_url: "https://images.pexels.com/photos/7084309/pexels-photo-7084309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "$3.00",
        category:"Without milk",
    }
];

const CoffeeFeedItem = ({coffee})=>{
    const navigation = useNavigation();
    const { name, image_url, price, category } = coffee;
    return(
        <TouchableOpacity 
            style={{
                borderRadius: 8,
                width: 150,
                alignItems: 'center',
                backgroundColor: COLORS.white,
                padding: 5,
                marginHorizontal: 15,
                marginVertical:10,

                elevation: 6,
                shadowColor: COLORS.dark,
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
            }}

            onPress={() => { navigation.navigate("DetailsScreen", { coffee })}}
        >

            <View>
                <Image
                    source={{ uri: image_url }}
                    resizeMode={"contain"}
                    style={{ 
                        width: 130,
                        height: 130, 
                        borderRadius: 10,
                    }}

                />


                <View
                    style={{
                        paddingLeft: 5,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.dark,
                            fontFamily: FONTS.bold,
                            fontSize: FONT_SIZES.font,
                            marginTop: 5,

                        }}
                    >
                        {name}
                    </Text>

                    <Text style={{
                        color: COLORS.dark,
                        fontFamily: FONTS.light,
                        fontSize: FONT_SIZES.small,
                        opacity:0.5,

                    }}>{category}</Text>

                    <Text style={{
                        color: COLORS.dark,
                        fontFamily: FONTS.regular,
                        fontSize: FONT_SIZES.small,
                        paddingLeft: 5,
                    }}>{price}</Text>
                </View>

            </View>


        </TouchableOpacity>
    )
}

const CoffeeFeeds = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            
            <FocusedStatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} translucent={false}/>

            <HomeHeader />

            <View>
                <FlatList
                    data={data}
                    // numColumns={2}
                    renderItem={
                        ({item})=>{
                            return <CoffeeFeedItem coffee={item}/>;
                        }
                    }
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            
            <Text
                style={{
                    color: COLORS.dark,
                    fontSize: FONT_SIZES.medium,
                    marginVertical: 40,
                    paddingLeft: 20,
                }}
            >
                Specially made for you
            </Text>


            <View
                style={{
                    height:130,
                    paddingHorizontal:10,
                    width:220,
                    flexDirection:'row',
                }}
            >
                <Image
                    source={{ uri: "https://images.pexels.com/photos/13242090/pexels-photo-13242090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                    resizeMode={"cover"}
                    style={{
                        width: 130,
                        borderRadius: 10,
                    }}

                />


                <View
                    style={{
                        paddingLeft: 5,
                        paddingTop:5,
                    }}
                >

                    <Text style={{
                        color: COLORS.white,
                        fontFamily: FONTS.light,
                        fontSize: FONT_SIZES.small-2,
                        backgroundColor:COLORS.secondary,
                        width:75,
                        paddingHorizontal:5,
                        paddingVertical: 5,
                        borderRadius:5,

                    }}>
                        Soft discount
                    </Text>


                    <Text
                        style={{
                            color: COLORS.dark,
                            fontFamily: FONTS.light,
                            fontSize: FONT_SIZES.font+2,
                            marginTop:10,

                        }}
                    >
                        With every purchase,
                        you'll receive two ice- flavored donut
                    </Text>

                </View>

            </View>
            

            

        </SafeAreaView>
    )
}

export default CoffeeFeeds;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    
});