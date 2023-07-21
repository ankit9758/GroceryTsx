import { createSlice } from "@reduxjs/toolkit";
import { ProductRootState } from "../model/products";
import { getProductList } from "./action";
import { FAILED, IDLE, LOADING, SUCCESS } from "../../../utils/AppConstant";

const initialState: ProductRootState['products'] = {
    status: IDLE,
    products: [],
    message: ''
};


const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getProductList.pending, (state, action) => {
            state.status = LOADING
        }).addCase(getProductList.fulfilled, (state, action) => {
            state.status = SUCCESS
            state.message = 'Product list get sucessfully'
            console.log('Product List===>', action.payload);
            state.products = action.payload.products
        }).addCase(getProductList.rejected, (state, action) => {
           
            state.status = FAILED
            state.products = []
            state.message = 'roduct List Failed===>'
            console.log('Product List===>', action.payload);
        })
    }

})

export default productSlice.reducer;