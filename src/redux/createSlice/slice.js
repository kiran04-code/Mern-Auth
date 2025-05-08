import { createSlice } from "@reduxjs/toolkit";

const initialState= {
   currentUser:null,
   loading:false,
   error:false,
}
const UserSlice = createSlice({
   name:"user",
   initialState,
   reducers:{
    SignInStart:(state)=>{
         state.loading = true
    },
    SignInSucess:(state,action) =>{
        state.currentUser = action.payload
        state.loading = false
        state.error = false 
    },
    SignInfail:(state,action)=>{
      state.loading = true,
      state.error = action.payload
    }

   }
})

export const {SignInStart,SignInSucess,SignInfail} = UserSlice.actions 
export default UserSlice.reducer