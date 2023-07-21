import axios from '../../../axios';

export const httpGetProductList = (email: string, password: string) => {
  const response =  axios.get('productis')
  console.log('log here  --->  ', response);
  return response;

};