import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { white } from '../utils/Colors'
type PropType = {
    value?: string, onChangeText: any,
    placeholder: string, type?: any, icon: any,
    isLast: boolean, onSubmit: any, reference?: any, isPassword?: boolean,
    maxLength?: number, isEditable?: boolean
}
export default function AppTextInput(props: PropType) {
    const { value, onChangeText,
        placeholder = '', type = 'default', icon,
        isLast, onSubmit, reference, isPassword, maxLength, isEditable = true } = props
    return (
        <View style={{
            width: '100%',
            height: 55,
            borderRadius: 10,
            borderWidth: 0.5,
            backgroundColor: white,
            marginTop: 10,
            alignSelf: 'center',
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center'
        }}>
            <Image source={icon} style={{ height: 24, width: 24 }} />
            <TextInput placeholder={placeholder} placeholderTextColor={'#000000'} style={{
                marginHorizontal: 10, flex: 1
            }} value={value} returnKeyType={isLast ? "done" : "next"}
                secureTextEntry={isPassword ? true : false}
                numberOfLines={1} onChangeText={onChangeText}
                keyboardType={type}
                maxLength={maxLength}
                editable={isEditable}
                blurOnSubmit={false}
                onSubmitEditing={onSubmit}
                ref={reference}
            />
        </View>
    )
}

const styles = StyleSheet.create({})