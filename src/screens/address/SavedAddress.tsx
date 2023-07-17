import { ActivityIndicator, FlatList, Image, RefreshControl, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { black, primaryColor, white } from '../../utils/Colors';
import { useIsFocused } from '@react-navigation/native';
import Header from '../../common/Header';
import { IMAGES } from '../../utils/Images';
import NoDataFound from '../../common/NoDatafound';
import { SimpleModal } from '../../common/Dialogs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { deleteAddress } from '../../redux/AddressSlice';

export default function SavedAddress({ routes, navigation }: any) {

    const addressList = useSelector((state: RootState) => state.address.data)
    const isFocused = useIsFocused();
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [id, setId] = useState('');
    const [visible, setVisible] = useState(false)
    const disptach: any = useDispatch();

    useEffect(() => {
        console.log(addressList)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [isFocused])

    const handleRefresh = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setRefreshing(false)
        }, 3000)
    };

    return (<View style={styles.container}>
        <StatusBar backgroundColor={primaryColor} barStyle={'light-content'}
            translucent={false} hidden={false} />
        <Header
            leftIcon={IMAGES.image_back}
            title={'Saved Adresses'}
            onClickLeftIcon={
                () => navigation.goBack()
            }
            isCartScreen={false}
        />

        <View style={{ flex: 1, backgroundColor: '#36454F', padding: 20 }}>
            {loading ? (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={70} color="#0000ff" />
            </View>) : (
                <FlatList data={addressList} showsVerticalScrollIndicator={false} renderItem={({ item, index }) => {
                    return (
                        <View style={styles.addressItems}>
                            <Text style={styles.stateText}>{` State: ${item.state}`}</Text>

                            <Text style={styles.cityText}>{` City: ${item.city}`}</Text>

                            <Text style={styles.pincode}>{` Pincode: ${item.pincode}`}</Text>

                            <Text style={[styles.stateText, {
                                position: 'absolute', right: 10, top: 10, color: white,
                                backgroundColor: primaryColor, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10
                            }]}>{item.type}</Text>

                            <View style={styles.addressActions}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('AddAddress', { types: 'edit', data: item })
                                }}>
                                    <Image style={styles.imgStyle} source={IMAGES.image_edit} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setId(item.id)
                                    setVisible(true)
                                }}>
                                    <Image style={styles.imgStyle} source={IMAGES.image_delete} />
                                </TouchableOpacity>
                            </View>
                        </View>);

                }}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />

                    }
                    ListEmptyComponent={
                        <NoDataFound description={'Please Add any adress'}
                            btnText={'Refresh'} onClick={() => { handleRefresh() }} />
                    }
                />
            )
            }

            <TouchableOpacity style={styles.addButton} onPress={() =>
                navigation.navigate('AddAddress', { types: 'new' })}>
                <Text style={{ fontSize: 40, color: white }}>
                    +
                </Text>

            </TouchableOpacity>


            <SimpleModal modelVisible={visible}
                title={'Delete Address ?'}
                description={'Are you sure you want to delete this address ?'}
                yesText={'Yes'} noText={'No'} onNoClick={() => {
                    setVisible(false)
                }} onYesClick={() => {
                    setVisible(false)
                    disptach(deleteAddress(id))
                }}
            />
        </View>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
    addButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: primaryColor,
        position: 'absolute',
        bottom: 40,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    addressItems: {
        marginTop: 10,
        paddingVertical: 15,
        flex: 1,
        flexDirection: 'column',
        borderRadius: 10,
        elevation: 5,
        paddingHorizontal: 10,
        backgroundColor: white

    },
    pincode: {
        fontSize: 14,
        color: black,
        fontFamily: 'Raleway-SemiBold'
    },
    cityText: {
        fontSize: 14,
        color: black,
        fontFamily: 'Raleway-Regular',

    },
    stateText: {
        fontSize: 16,
        color: primaryColor,
        fontFamily: 'Raleway-Black'

    },
    imgStyle: {
        width: 22,
        height: 22,
        paddingHorizontal: 10,
        marginHorizontal: 5
        , tintColor: primaryColor

    },
    addressActions: { position: 'absolute', right: 10, bottom: 10, flexDirection: 'row' }

})