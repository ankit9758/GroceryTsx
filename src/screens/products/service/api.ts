import axios from '../../../axios';

export const httpGetProductList = (email: string, password: string) => {
  const response =  axios.get('products')
  console.log('log here  --->  ', response);
  return response;

};