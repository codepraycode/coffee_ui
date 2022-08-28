import { View, Text } from 'react-native'
import React from 'react'
import { FONTS, COLORS, FONT_SIZES } from '../constants';

const APPButton = () => {
  return (
    <View>
        <TouchableOpacity
            onPress={() => { navigation.navigate("DetailsScreen", { name: "A simple plant" }) }}
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: FONT_SIZES.extraLarge,
                width: 120,
                padding: FONT_SIZES.small,
            }}
        >
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: FONT_SIZES.small,
                    color: COLORS.white,
                    textAlign: 'center'
                }}
            >
                View Details
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default APPButton