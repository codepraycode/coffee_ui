import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FONTS, FONT_SIZES,COLORS } from '../constants';

const CategoryTab = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tabCont}>
                <Text style={[styles.tab, styles.active]}>Cappuccino</Text>
                <View style={styles.rollo}></View>
            </View>

            <View>
                <Text style={styles.tab}>Espresso</Text>
                {/* <View style={styles.rollo}></View> */}
            </View>


            <View>
                <Text style={styles.tab}>Cold Brew</Text>
                {/* <View style={styles.rollo}></View> */}
            </View>

            <View>
                <Text style={styles.tab}>Latte</Text>
                {/* <View style={styles.rollo}></View> */}
            </View>

        </View>
    )
}

export default CategoryTab;


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginVertical:20,
    },
    tab:{
        fontFamily: FONTS.medium,
        fontSize:FONT_SIZES.regular,
    },
    active: {
        color:COLORS.primary,
        opacity: 1,
    },
    tabCont:{
        position:'relative',
    },
    rollo:{
        position:'absolute',
        left:'50%',
        top:'100%',
        width:10,
        height:10,
        borderRadius:15,
        alignContent:'center',
        justifyContent: 'center',
        backgroundColor:COLORS.primary,
    }
})