import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { Button, Icon } from "@rneui/themed";

import DetailHeader from '../components/DetailHeader';

import { FONTS, FONT_SIZES, COLORS } from '../constants';


const DetailScreen = ({route}) => {

    // console.log(route);
    const {coffee} = route.params;

    const [sizeIndex, setSizeIndex] = useState(1);

    const handleSizeIndexChange = (v) =>{
        
        setSizeIndex(Number(v));
    }
    
    return (
        <>
            <DetailHeader/>
        
            <View style={styles.container}>
                <View
                    style={{
                        width:'100%',
                        height:200,
                        paddingHorizontal:10,
                    }}
                >
                    <Image
                        source={{ uri: coffee?.image_url }}
                        resizeMode={"center"}
                        style={{
                            width: "100%", height: '100%',
                            borderRadius:15,
                        }}
                    />
                </View>

                <View 
                    style={{
                        marginTop:25,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        paddingHorizontal:15,
                    }}
                >

                    <View>
                        <Text
                            style={{
                                fontFamily:FONTS.bold,
                                fontSize:FONT_SIZES.large,
                            }}
                        >
                            {coffee?.name}
                        </Text>

                        <Text
                            style={{
                                fontFamily: FONTS.light,
                                fontSize: FONT_SIZES.small,
                                opacity:0.5,
                            }}
                        >
                            {coffee?.category}
                        </Text>
                    </View>

                    <View>
                        <Button
                            type="solid"
                            buttonStyle={{
                                borderRadius: 5,
                                backgroundColor: COLORS.secondary,
                                paddingVertical:5,
                            }}
                        >
                            <Icon
                                type="material"
                                name="star"
                                iconStyle={{
                                    color:COLORS.white,
                                    fontSize:FONT_SIZES.medium +3,
                                    marginRight:5,
                                }}
                            />
                            4.5
                        </Button>
                    </View>
                    

                </View>

                <View
                    style={{
                        // marginVertical:15,
                        marginLeft:20,
                    }}
                >
                    <Text
                        style={{
                            fontSize: FONT_SIZES.medium,
                            fontFamily: FONTS.medium,
                            marginVertical:15,
                        }}
                    >
                        Coffee Size
                    </Text>


                    <View
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center',

                        }}
                    >
                        
                        <TouchableOpacity 
                            style={styles.tabItem}
                            onPress={()=>handleSizeIndexChange(1)}
                        >
                            <Text 
                                style={[styles.tabItemText, sizeIndex === 1 && styles.tabItemTextActive]}
                            >
                                Small
                            </Text>

                        </TouchableOpacity>


                        <TouchableOpacity 
                            style={styles.tabItem}
                            onPress={()=>handleSizeIndexChange(2)}
                        >
                            <Text
                                style={[styles.tabItemText, sizeIndex === 2 && styles.tabItemTextActive]}
                            >
                                Medium
                            </Text>

                        </TouchableOpacity>


                        <TouchableOpacity 
                            style={styles.tabItem}
                            onPress={()=>handleSizeIndexChange(3)}
                        >
                            <Text
                                style={[styles.tabItemText, sizeIndex === 3 && styles.tabItemTextActive]}
                            >
                                Large
                            </Text>

                        </TouchableOpacity>


                    </View>
                </View>

                <View
                    style={{
                        marginVertical:25,
                        paddingHorizontal:15,
                    }}
                >

                    <Text
                        style={{
                            fontSize: FONT_SIZES.medium,
                            fontFamily: FONTS.medium,
                            marginVertical: 15,
                        }}
                    >
                        Description
                    </Text>


                    <Text
                        style={{
                            fontFamily: FONTS.light,
                            fontSize: FONT_SIZES.regular,
                            opacity: 0.5,
                        }}
                    >
                        Ullamco cupidatat consequat aliqua est commodo dolore. 
                        Nisi et ad cupidatat dolore magna commodo adipisicing ad nisi duis sit. Pariatur est cupidatat voluptate ut. 
                        Pariatur ut laboris amet non minim cillum non tempor tempor dolor. 
                        
                    </Text>
                </View>                


                <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        paddingHorizontal:15,
                        marginTop:10,
                    }}
                >

                    <View>
                        <Text
                            style={{
                                opacity:0.5,
                                marginBottom:10,
                            }}
                        >
                            Price
                        </Text>
                        <Text
                            style={{
                                fontFamily: FONTS.bold,
                                fontSize: FONT_SIZES.font,
                            }}
                        >
                            {coffee?.price}
                        </Text>
                    </View>

                    <View>
                        <Button 
                            type="solid"
                            buttonStyle={{
                                borderRadius:5,
                                backgroundColor:COLORS.primary,
                                paddingHorizontal:25,
                            }}
                        >
                            Add to cart
                        </Button>
                    </View>

                </View>
            </View>
        </>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:20,
    },
    tabItem: {
        paddingHorizontal: 10,
        alignContent: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: COLORS.gray,
    },
    tabItemText: {
        color: COLORS.gray,
        // backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 5,
    },
    tabItemTextActive: {
        color: COLORS.white,
        backgroundColor: COLORS.primary,

    },
    
    tabItemLast: {
        marginRight: 0,
        borderRightWidth: 0,
    }
});