import { createSlice } from "@reduxjs/toolkit";


const userSlice =  createSlice({
    name:"user",
    initialState: null,
    reducers:{
        addUser: (state,action) => {
            return action.payload;
        },
        removeUser: (state,action)=>{
            return null;
        }
    }
})

export const{addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;  // This is ONE big function  HEAD CHEF

// This is the complete function that Redux uses to manage your entire slice of state.
// It knows how to handle ALL the actions you defined above.

// Reducers (plural) in a Slice = Individual functions that handle specific actions
// These are just functions that say "when this action happens, update state like this".