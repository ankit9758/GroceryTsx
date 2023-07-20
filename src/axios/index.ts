import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const instance = axios.create({
    baseURL: 'https://dummyjson.com/',
});

instance.interceptors.request.use(async function (config) {
    console.log('Call interceptors');
    const token = await AsyncStorage.getItem('user_token');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
});

export default instance;
