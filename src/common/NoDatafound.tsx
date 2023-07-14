import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import { primaryColor, white } from '../utils/Colors';
import AppButton from './AppButton';
import { IMAGES } from '../utils/Images';
const { height, width } = Dimensions.get('window');

type PropType = {
    description?: string, btnText: string, title?: string, onClick: ()=>void
}
const NoDataFound = (props: PropType) => {
    const { description, btnText, title = 'No Data Found', onClick } = props
    return (
        <View style={styles.container}>
            <Image source={IMAGES.image_no_data} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={{ width: width - 50 }}>
                <AppButton title={btnText} onPress={onClick} />
            </View>

        </View>
    );
}
export default NoDataFound;

const styles = StyleSheet.create({
    container: {
        height: height,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    title: {
        color: primaryColor,
        fontSize: 20,
        fontFamily: 'Raleway-Black'

    },
    description: {
        fontSize: 14,
        color: primaryColor,
        fontFamily: 'Raleway-Regular'

    },
    icon: {
        width: 50,
        height: 50,
        tintColor: primaryColor
    }
}); 