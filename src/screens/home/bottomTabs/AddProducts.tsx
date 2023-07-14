import { Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppTextInput from '../../../common/AppTextInput'
import { black, darkRed, primaryColor, white } from '../../../utils/Colors'
import AppButton from '../../../common/AppButton'
import { IMAGES } from '../../../utils/Images'
import { validateEmpty, validateName } from '../../../common/Validaton'

export default function AddProducts() {
  const [firstName, setFirstName] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const emailRef: any = React.useRef()
  const addressRef: any = React.useRef()
  const firstNameRef: any = React.useRef()

  const [addressError, setAddressError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [firstNameError, setFirstNameError] = useState<string>('')
  return (
    <View style={{ padding: 20 }}>

      <AppTextInput placeholder={'Enter First Name'} type={'default'}
        icon={IMAGES.image_name} isLast={false} value={firstName}
        onChangeText={(text: string) => { setFirstName(text) }}
        reference={firstNameRef}
        onSubmit={() => emailRef.current.focus()} />
      {<Text style={[styles.errorText12]}>{firstNameError}</Text>}


      <AppTextInput placeholder={'Enter Email Id'} type={'email-address'}
        icon={IMAGES.image_email} isLast={false} value={email}
        onChangeText={(text: string) => { setEmail(text) }}
        reference={emailRef}
        onSubmit={() => addressRef.current.focus()} />
      {<Text style={[styles.errorText12]}>{emailError}</Text>}

      <AppTextInput placeholder={'Enter address'} type={'default'}
        icon={IMAGES.image_address} isLast={true} value={address}
        onChangeText={(text: string) => { setAddress(text) }}
        reference={addressRef}
        onSubmit={() => Keyboard.dismiss()} />
      {<Text style={[styles.errorText12]}>{addressError}</Text>}

      <AppButton title={'Add user '} onPress={() => {
        if (validateEmpty(firstName)) {
          setFirstNameError('Please enter first name')
        } else if (!validateName(firstName)) {
          setFirstNameError('Please enter valid first name')
        } else if (validateEmpty(email)) {
          setFirstNameError('')
          setEmailError('Please enter Email')
        }
        else if (validateEmpty(address)) {
          setFirstNameError('')
          setEmailError('')
          setAddressError('Please enter address')
        }
        else {
          setFirstNameError('')
          setEmailError('')
          setAddressError('')

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