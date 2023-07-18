import { Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { black, blue, darkRed, primaryColor, white } from '../../utils/Colors';
import OverlayActivityIndicator from '../../common/Loader';
import { IMAGES } from '../../utils/Images';
import AppTextInput from '../../common/AppTextInput';
import AppButton from '../../common/AppButton';
import { isValidEmail, validateEmpty, validatePassword } from '../../common/Validaton';
import SocialButton from '../../common/SocialButton';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import showCustomToast, { toastConfig } from '../../utils/Toastconfig';
import { ForgotPasswordModal } from '../../common/Dialogs';
import { ERROR, NORMAL, SUCESS } from '../../utils/AppConstant';
import { UserDataSlice, addUserData } from '../../redux/slices/UserDataSlice';
import { useDispatch } from 'react-redux';

export default function Login({ navigation }: any) {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);

    const emailRef: any = React.useRef()
    const passwordRef: any = React.useRef()

    const [visible, setVisible] = useState(false)

    const [fogotPasswordEmail, setFogotPasswordEmail] = useState('')
    const [fogotPasswordEmailError, setFogotPasswordEmailError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [socialData, setSocialData] = useState({})
    const disptach: any = useDispatch();
    // const userData = useSelector(state => state.userData)

    useEffect(() => {
        //console.log('login--user---Data----', userData.data)
        // GoogleSignin.configure({

        //     //   webClientId: '300110096690-qmb9sgt6837gi4p8t4pc8k4sn0trsujj.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)

        // });
    }, [])
    useEffect(() => {

        // if (socialData.socialEmail) {
        //     console.log('socialemail', socialData)
        //     checkLoginData(true, socialData.socialEmail)
        // }
    }, [socialData])

    const displayLoader = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            const data ={}
            saveJSONToAsyncStorage(data)
        }, 5000);
    }

    const clearErrors = () => {
        setEmail('')
        setPassword('')
        setEmailError('')
        setPasswordError('')
    }

    const saveJSONToAsyncStorage = (data: any) => {
        try {          
             disptach(addUserData({accountType: NORMAL,
                email: email,
                firstName:'ankit',
                imagePath: '',
                lastName: 'singh',
                password: password,
                phoneNumber: '9899639899',
                socialId: '',
                userId: 'ghfdgajfdsgfjasdg'}))

            navigation.navigate('Main')
        } catch (error) {
            showCustomToast(ERROR, 'Error saving JSON value:' + error)
            console.log('Error saving JSON value:', error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: white }}  >

            {loading && <OverlayActivityIndicator />}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Image source={IMAGES.image_logo} resizeMode="center" style={styles.image} />
                    <Text style={styles.heading}>
                        Login
                    </Text>
                    <View style={{ marginTop: 20 }} />
                    <AppTextInput placeholder={'Enter Email Id'} type={'email-address'}
                        icon={IMAGES.image_email} isLast={false} value={email}
                        onChangeText={(text: string) => { setEmail(text) }}
                        reference={emailRef}
                        onSubmit={() => passwordRef.current.focus()} />
                    {<Text style={[styles.errorText12]}>{emailError}</Text>}
                    <AppTextInput placeholder={'Enter Password'}
                        icon={IMAGES.image_password}
                        isLast={true}
                        isPassword={true}
                        reference={passwordRef}
                        onSubmit={() => Keyboard.dismiss()}
                        value={password} onChangeText={(text: string) => { setPassword(text) }}
                    />
                    {<Text style={[styles.errorText12]}>{passwordError}</Text>}
                    <TouchableOpacity onPress={() => {
                        setFogotPasswordEmail('')
                        setFogotPasswordEmailError('')
                        setVisible(true)
                    }}>
                        <Text style={styles.forgotText}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                    <View style={{ marginVertical: 20 }} />


                    <AppButton title={'Login'} onPress={() => {

                        if (validateEmpty(email)) {

                            setEmailError('Please enter Email')
                        } else if (!isValidEmail(email)) {
                            setEmailError('Please enter valid email')
                        } else if (validateEmpty(password)) {
                            setEmailError('')
                            setPasswordError('Please enter password')
                        } else if (!validatePassword(password)) {
                            setEmailError('')
                            setPasswordError('Please enter valid password')
                        }
                        else {
                            setEmailError('')
                            setPasswordError('')
                            displayLoader()
                            //   checkLoginData(false, email)
                        }



                    }} />
                    <Text style={{
                        textAlign: 'center', marginVertical: 10,
                        fontSize: 14, color: '#383838', fontFamily: 'Raleway-Regular'
                    }}>----or Login with---- </Text>

                    <SocialButton onPress={() => { console.log('Google') }} textColor={darkRed}
                        title={'LOGIN WITH GOOGLE'} icon={IMAGES.image_google} />
                    <SocialButton onPress={() => { }} textColor={blue}
                        title={'LOGIN WITH FACEBOOK'} icon={IMAGES.image_facebook} />

                    <View style={{
                        marginTop: 10, marginBottom: 20, flexDirection: 'row',
                        alignItems: 'center', alignContent: 'center', justifyContent: 'center'
                    }}>
                        <Text style={styles.alreadyText}>
                            Don't have Account ?
                        </Text>
                        <TouchableOpacity onPress={() => {
                            clearErrors()
                            navigation.navigate('Signup')
                        }}>
                            <Text style={styles.signupText}>
                                Signup
                            </Text>
                        </TouchableOpacity>


                    </View>
                </View>


            </ScrollView>
            <Toast config={toastConfig} />
            <ForgotPasswordModal modelVisible={visible} title={'Forgot Password?'}
                yesText={'Submit'}

                onNoClick={() => {
                    setVisible(false)
                }}
                email={fogotPasswordEmail}
                setEmail={setFogotPasswordEmail}
                emailError={fogotPasswordEmailError}
                setFogotPasswordEmailError={setFogotPasswordEmailError}
                onYesClick={(emailId: string) => {
                    console.log('Email---' + emailId)
                    setVisible(false)
                    showCustomToast(SUCESS, emailId)
                }}
            />

        </SafeAreaView>


    );

}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontFamily: 'Raleway-Black'
    },

    heading: {
        fontSize: 50,
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

})