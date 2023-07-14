import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native"
import { darkGray, lightGray } from "../utils/Colors";



type PropType = {
    title?: string, icon?: any,
    textColor?: any, onPress: () => void
}
const SocialButton = (props: PropType) => {
    const { title, icon, textColor, onPress } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.appButtonContainer} >
                <Image source={icon} style={{ height: 24, width: 24 }} />
                <Text style={[style.appButtonText, { color: textColor }]}>{title}</Text>
            </View>
        </TouchableOpacity>)
};

const style = StyleSheet.create({
    appButtonContainer: {
        borderWidth: 1,
        borderColor: darkGray,
        backgroundColor: lightGray,
        // elevation: 8,
        borderRadius: 10,
        height: 50,
        // paddingVertical: 12,
        verticalAlign: 'bottom',
        alignContent: 'center',
        paddingHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'


    },

    appButtonText: {
        fontSize: 18,
        //color: {textColor},
        marginHorizontal: 15,
        textTransform: "none",
        fontFamily: 'Raleway-ExtraBold'
    },
})
export default SocialButton