import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React,{createRef, useState}from 'react';
import { Icon, SearchBar } from '@rneui/themed';

import { FONTS, COLORS, FONT_SIZES } from '../constants';
import CategoryTab from './CategoryTab';

const HomeHeader = () => {
    let searchRef = createRef();
    const [searchValue, setSearchValue] = useState('')    

    return (
        <View style={styles.headerContainer}>

            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}>Good Morning Mary,</Text>

                    <View>
                        <Text style={styles.textBold}>Find your Ideal cup</Text>
                        <Text style={styles.textBold}>
                            of coffee
                        </Text>
                    </View>
                </View>

                <TouchableOpacity style={{paddingRight:10,paddingTop:10}}>
                    <Icon
                        name='bell'
                        type='octicon'
                        color={COLORS.dark}
                    />
                </TouchableOpacity>
                
            </View>


            <SearchBar
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.searchInputContainer}
                inputStyle={styles.searchInputStyle}
                lightTheme={true}
                value={searchValue}
                onChangeText={(txt)=>setSearchValue(txt)}
                // showCancle={false}
                round={true}
                ref={search => searchRef = search}
                placeholder={"Find your coffee"}
                onClear={()=>setSearchValue('')}
                
            />


            <CategoryTab/>
            
        </View>
    )
}

export default HomeHeader;


const styles = StyleSheet.create({
    headerContainer:{
        paddingBottom:15,
    },
    header:{
        paddingHorizontal:10,
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'space-between',
    },
    headerText:{
        fontFamily:FONTS.light,
        fontSize: FONT_SIZES.small,
        color:COLORS.dark,
        opacity:0.6,
    },
    textBold:{
        fontFamily: FONTS.bold,
        fontSize: FONT_SIZES.large,
    },
    searchContainer:{
        backgroundColor: COLORS.white,
        borderTopWidth:0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        paddingVertical:2,
    },
    searchInputContainer:{
        borderBottomWidth: 0,
        height:45,
        borderRadius:10,
    },
    searchInputStyle:{
        fontSize:FONT_SIZES.font,
        fontFamily:FONTS.light,
        
    }
})