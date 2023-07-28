import { Alert, Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppTextInput from '../../../common/AppTextInput'
import { black, darkRed, primaryColor, white } from '../../../utils/Colors'
import AppButton from '../../../common/AppButton'
import { IMAGES } from '../../../utils/Images'
import { validateEmpty, validateName } from '../../../common/Validaton'
import { useDispatch, useSelector } from 'react-redux'
import { ProductRootState } from '../../products/model/products'
import { addProducts } from '../../products/service/action'
import { FAILED, LOADING, SUCCESS } from '../../../utils/AppConstant'
import Loader from '../../../common/Loader'

export default function AddProducts() {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const priceRef: any = React.useRef()
  const descriptionRef: any = React.useRef()
  const nameRef: any = React.useRef()

  const [priceError, setPriceError] = useState<string>('')
  const [descriptionError, setDescriptionError] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')


  const dispatch = useDispatch<any>();

  const { products, status, message } = useSelector((state: ProductRootState) => state.products);


  useEffect(() => {
    if (status === SUCCESS) {
      console.log('Home pagedata ', )
    } else if (status === FAILED) {
      Alert.alert(`Errror==>${message}`);
    }
  }, [status]);



  return (
    <View style={{ padding: 20 }}>
      {status == LOADING && <Loader />}
      <AppTextInput placeholder={'Enter Product Name'} type={'default'}
        icon={IMAGES.image_name} isLast={false} value={name}
        onChangeText={(text: string) => { setName(text) }}
        reference={nameRef}
        onSubmit={() => descriptionRef.current.focus()} />
      {<Text style={[styles.errorText12]}>{nameError}</Text>}


      <AppTextInput placeholder={'Enter Product Description'} type={'default'}
        icon={IMAGES.image_email} isLast={false} value={description}
        onChangeText={(text: string) => { setDescription(text) }}
        reference={descriptionRef}
        onSubmit={() => priceRef.current.focus()} />
      {<Text style={[styles.errorText12]}>{descriptionError}</Text>}

      <AppTextInput placeholder={'Enter Product Price'} type={'default'}
        icon={IMAGES.image_address} isLast={true} value={price}
        onChangeText={(text: string) => { setPrice(text) }}
        reference={priceRef}
        onSubmit={() => Keyboard.dismiss()} />
      {<Text style={[styles.errorText12]}>{priceError}</Text>}

      <AppButton title={'Add Product '} onPress={() => {
        if (validateEmpty(name)) {
          setNameError('Please enter Product name')
        } else if (!validateName(name)) {
          setNameError('Please enter valid product name')
        } else if (validateEmpty(description)) {
          setNameError('')
          setDescriptionError('Please enter Email')
        }
        else if (validateEmpty(price)) {
          setNameError('')
          setDescriptionError('')
          setPriceError('Please enter address')
        }
        else {
          setNameError('')
          setDescriptionError('')
          setPriceError('')
          dispatch(addProducts({ title: name, description: description, price: price }))
          .then((data:any)=>{
            console.log('ADddd---Data',data)
          })
          
        }

      }} />
    </View>
  )
}

const styles = StyleSheet.create({

  heading: {
    fontSize: 30,
    color: primaryColor,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Raleway-Black',
  },
  image: {
    alignSelf: 'center',
    width: 100, height: 100,
    borderRadius: 100 / 2, marginTop: 80,
    backgroundColor: 'yellow',
  },
  forgotText: {
    fontSize: 20,
    color: primaryColor,
    textAlign: 'right',
    marginTop: 20,
  },
  alreadyText: {
    fontSize: 20,
    color: black,
    fontFamily: 'Raleway-Regular',
  },
  signupText: {
    fontSize: 20,
    color: primaryColor,
    paddingHorizontal: 10,
    fontFamily: 'Raleway-Black',
    textDecorationLine: 'underline'
  },
  errorText12: {
    fontSize: 13,
    color: darkRed,
    fontFamily: 'Raleway-Regular',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginStart: 5
  },
  profileContainer: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginVertical: 40


  },
  profilePhotoContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    right: -5,
    top: 110
  },
  uploadIconStyle: {
    width: 15,
    height: 15,
    tintColor: white
  },
  uploadBackStyle: {
    width: 30,
    height: 30,
    backgroundColor: primaryColor,
    borderRadius: 15,
    alignContent: 'center',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottomTitleText: {
    marginTop: 30,
    fontSize: 24,
    color: black,
    fontFamily: 'Raleway-Black',

  },

  bottomDescText: {
    fontSize: 16,
    color: black,
    fontFamily: 'Raleway-Regular',
    marginBottom: 20,
  },

  bottomButtonText: {
    fontSize: 20,
    color: white,
    fontFamily: 'Raleway-Regular'
  },
  bottombuton: {
    width: '100%', marginTop: 10,
    backgroundColor: primaryColor,
    paddingVertical: 12,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})