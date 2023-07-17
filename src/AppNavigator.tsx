
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from './screens/authentication/OnBoardingScreen';
import OtpVerification from './screens/authentication/OtpVerification';
import Login from './screens/authentication/Login';
import Signup from './screens/authentication/Signup';
import Main from './screens/home/Main';
import SavedAddress from './screens/address/SavedAddress';
import AddAddress from './screens/address/AddAddress';
import EditProfile from './screens/user/EditProfile';


const Stack = createNativeStackNavigator()
const AppNavigator = (props: any) => {
    // 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
    return (
        <NavigationContainer >

            
            <Stack.Navigator>
                <Stack.Screen name='Onboarding' component={OnBoardingScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen name='OtpVerification' component={OtpVerification}
                    options={{ headerShown: true, title: '' }} />
                <Stack.Screen name='Login' component={Login}
                    options={{ headerShown: false }} />
                <Stack.Screen name='Signup' component={Signup}
                    options={{ headerShown: true, title: '' }} />
                <Stack.Screen name='Main' component={Main}
                    options={{ headerShown: false }} />

                <Stack.Screen name='SavedAddress' component={SavedAddress}
                    options={{ headerShown: false }} />
                <Stack.Screen name='AddAddress' component={AddAddress}
                    options={{ headerShown: false }} />

                <Stack.Screen name='EditProfile' component={EditProfile}
                    options={{ headerShown: false }} />
            </Stack.Navigator>

        </NavigationContainer>)
}
export default AppNavigator;