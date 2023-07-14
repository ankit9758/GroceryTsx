import React from "react";
import { TouchableOpacity, Text, View } from "react-native"
import stylesApp from '../utils/styles';

type PropType = {
    title?: string, onPress: any
}
export default function AppButton(props: PropType) {
    const { title, onPress } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={stylesApp.appButtonContainer} >
                <Text style={[stylesApp.appButtonText]}>{title}</Text>
            </View>
        </TouchableOpacity>)
};
