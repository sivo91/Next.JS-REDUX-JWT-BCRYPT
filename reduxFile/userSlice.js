
import { createSlice } from "@reduxjs/toolkit";

let userState


if (typeof window !== "undefined") {
  userState = JSON.parse(window.localStorage.getItem('auth'))
} else {
  userState = null // {}
}

//console.log(userState) 


const initialState = {
  user: userState,
  isLoading: false
}


const userSlice = createSlice({
   name: 'userAuth',
   initialState,
   reducers: {
    userInside: (state, action) => {
      state.user = action.payload
    },
    userLogOut: (state) => {
      state.user = null
    }
   }
})

export const {userInside, userLogOut} = userSlice.actions
export default userSlice.reducer