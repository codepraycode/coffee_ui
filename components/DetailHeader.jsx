import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import { Icon } from '@rneui/themed';
import {useNavigation} from '@react-navigation/core';


import { COLORS, FONT_SIZES } from '../constants';
import FocusedStatusBar from './FocusedStatusBar';

const DetailHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <FocusedStatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} translucent={false} />

            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Icon
                    name='chevron-left'
                    type='feather'
                    color={COLORS.dark}
                    iconStyle={styles.IconStyle}
                />
            </TouchableOpacity>

            <View>
                <Icon
                    name='heart'
                    type='octicon'
                    color={COLORS.dark}
                    iconStyle={styles.IconStyle}
                />
            </View>

        </View>
    )
}

export default DetailHeader;


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor:COLORS.white,
        paddingVertical:15,
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    IconStyle:{
        fontSize: FONT_SIZES.extraLarge + 5,
    }
})