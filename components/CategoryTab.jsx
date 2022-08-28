import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { FONTS, FONT_SIZES,COLORS } from '../constants';

const CategoryTab = () => {
    const [catIndex, setCatIndex] = useState(1)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tabCont} onPress={()=>setCatIndex(1)}>
                <Text style={[styles.tab, catIndex==1 && styles.active]}>Cappuccino</Text>
                {catIndex == 1 && <View style={styles.rollo}></View>}
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabCont} onPress={()=>setCatIndex(2)}>
                <Text style={[styles.tab, catIndex == 2 && styles.active]}>Espresso</Text>
                {catIndex == 2 && <View style={styles.rollo}></View>}
            </TouchableOpacity>


            <TouchableOpacity style={styles.tabCont} onPress={()=>setCatIndex(3)}>
                <Text style={[styles.tab, catIndex == 3 && styles.active]}>Cold Brew</Text>
                {catIndex == 3 && <View style={styles.rollo}></View>}
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabCont} onPress={()=>setCatIndex(4)}>
                <Text style={[styles.tab, catIndex == 4 && styles.active]}>Latte</Text>
                {catIndex == 4 && <View style={styles.rollo}></View>}
            </TouchableOpacity>

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