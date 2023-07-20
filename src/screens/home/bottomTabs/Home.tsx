import { ActivityIndicator, Image, FlatList, RefreshControl, StatusBar, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { black, green, primaryColor, white } from '../../../utils/Colors';
import { useIsFocused } from '@react-navigation/native';
import { IMAGES } from '../../../utils/Images';
import NoDataFound from '../../../common/NoDatafound';
import { useDispatch, useSelector } from 'react-redux';
import { ProductRootState } from '../../products/model/products';
import { FAILED, SUCCESS } from '../../../utils/AppConstant';
import { getProductList } from '../../products/service/action';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [visible, setVisible] = useState(false)
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)
  // }, [isFocused])



  const dispatch = useDispatch<any>();

  const { products, status, message } = useSelector((state: ProductRootState) => state.products);
  
  useEffect(() => {
    dispatch(getProductList({email:'ankit',password:"Ankit singfh "}))
  }, []);

  useEffect(() => {
    if (status === SUCCESS) {
      Alert.alert(`SUCESS==>`);
    } else if (status === FAILED) {
      Alert.alert(`Errror==>${message}`);
    }
  }, [status]);

  const handleRefresh = () => {

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setRefreshing(false)
    }, 3000)
  };

  return (

    <View style={styles.container}>



      {loading ? (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={70} color="#0000ff" />
      </View>) : (
        <FlatList data={[1, 1, 1, 1, 1]} showsVerticalScrollIndicator={false} renderItem={({ item, index }) => {
          return (
            <View style={styles.addressItems}>
              <Text style={styles.stateText}>{` Name:`}</Text>
              <Text style={styles.cityText}>{` Description:`}</Text>
              <Text style={styles.pincode}>{` Price:`}</Text>


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

    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white, padding: 10
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
    backgroundColor: green

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