import axios from '../../../axios';

export const httpGetProductList = (email: string, password: string) => {
  const response =  axios.get('products')
  console.log('log here  --->  ', response);
  return response;

};
export const httpAddProduct = (data:any) => {
  const response =  axios.post('products/add',data)
  console.log('log here  --->  ', response);
  return response;

};