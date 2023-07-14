import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { primaryColor, white } from '../utils/Colors';
import { IMAGES } from '../utils/Images';


type PropType = {
    title?: string, leftIcon?: any, onClick: any
}
export default function ProfileItems(props: PropType) {
    const { title, leftIcon = IMAGES.image_back, onClick } = props
    return (
        <TouchableOpacity onPress={() => onClick()}>
            <View style={styles.container}>

                <Image source={leftIcon} style={styles.icon} />

                <Text style={styles.title}>{title}</Text>

                <Image source={IMAGES.image_forward_arrow} style={styles.icon} />

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        // width: width,
        height: 56,
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        flexDirection: 'row',
        borderRadius: 20,
        marginEnd: 20,
        marginTop: 10,
        marginStart: 20
    },

    title: {
        color: white,
        fontSize: 20,
        fontFamily: 'Raleway-Black',
        flex: 1, paddingHorizontal: 20

    },
    icon: {
        width: 30,
        height: 30,
        tintColor: white
    }
})