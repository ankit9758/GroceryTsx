
import thunk from 'redux-thunk';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { httpAddProduct, httpGetProductList } from './api';
import { ApiError } from '../model/products';
import { AxiosError } from 'axios';


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
        console.log('Response Login ::::::', response.status);
        return response.data;
      } catch (err) {
        var excepion=err as AxiosError
        console.log(`something ${excepion.cause}`);
        // throw new Error('Error yha hai bhai')
        return thunkAPI.rejectWithValue(err);
      }
    },
  );

  export const addProducts = createAsyncThunk(
    'product/add',
    async (
      data: {
        title: string;
        description: string;
        price: string;
      },
      thunkAPI,
    ) => {
     
      try {
      

        const response: any = await httpAddProduct(data);
        //will store token into local storage
        // await loginUser(response.data.access_token);
        console.log('Response add Product ::::::', response.status);
        return response.data;
      } catch (err) {
        var excepion=err as AxiosError
        console.log(`something ${excepion.cause}`);
        // throw new Error('Error yha hai bhai')
        return thunkAPI.rejectWithValue(err);
      }
    },
  );