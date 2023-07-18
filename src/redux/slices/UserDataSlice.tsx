import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER_DATA } from '../../utils/AppConstant'



interface UserData {
   accountType: string;
   email: string;
   firstName: string;
   imagePath: string;
   lastName: string;
   password: string;
   phoneNumber: string;
   socialId: string;
   userId: string;
}
interface UserDataState {
   data: UserData;
}

const initialState: UserDataState = {
   data: {} as UserData, // You can initialize it as an empty object or provide default values for properties.
};
export const UserDataSlice = createSlice({
   name: USER_DATA,
   initialState: initialState,
   reducers: {
      addUserData(state, action: PayloadAction<UserData>) {
         state.data = action.payload;
      },
      removeUserData(state) {
         state.data = {} as UserData; // Clearing the data by assigning an empty object.
      },
   }


})
export const { addUserData, removeUserData } = UserDataSlice.actions
export default UserDataSlice.reducer