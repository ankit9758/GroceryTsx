import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Address {
    id: any;
    state: string;
    city: string;
    pincode: string;
    type: string;
}
interface AddressState {
    data: Address[];
}

const initialState: AddressState = {
    data: [],
};
export const AddressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        addAddress(state, action: PayloadAction<Address>) {
            state.data.push(action.payload)
        },
        deleteAddress(state, action: PayloadAction<string>) {
            let newArr = state.data.filter(item => {
                return item.id !== action.payload
            })
            state.data = newArr
        },
        updateAddress(state, action: PayloadAction<Address>) {
            // let temp=state.data
            // temp.map(item=>{
            //     if(item.id==action.payload.id){
            //         item.state=action.payload.state
            //         item.city=action.payload.city
            //         item.pincode=action.payload.pincode
            //         item.type=action.payload.type
            //     }
            // })

            // state.data=temp

            state.data = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        state: action.payload.state,
                        city: action.payload.city,
                        pincode: action.payload.pincode,
                        type: action.payload.type,
                    };
                }
                return item;
            });

        }
    }
})
export const { addAddress, deleteAddress, updateAddress } = AddressSlice.actions
export default AddressSlice.reducer