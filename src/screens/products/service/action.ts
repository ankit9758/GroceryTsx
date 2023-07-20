
import thunk from 'redux-thunk';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { httpGetProductList } from './api';


export const getProductList = createAsyncThunk(
    'product/get',
    async (
      data: {
        email: string;
        password: string;
      },
      thunkAPI,
    ) => {
     
      try {
        const {email, password} = data;

        const response: any = await httpGetProductList(email, password);
        //will store token into local storage
        // await loginUser(response.data.access_token);
        console.log('Response Login ::::::', response);
        return response.data;
      } catch (err) {
        console.log('something went wrong in case of login ', err);
        // throw new Error('Error yha hai bhai')
        return thunkAPI.rejectWithValue('something went wrong');
      }
    },
  );