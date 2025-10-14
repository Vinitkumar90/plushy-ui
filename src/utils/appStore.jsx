import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

const appStore = configureStore({
    reducer:{
        user: userReducer
    }
})
export default appStore;



// Why "reducer" again in the store? 
// Because the store needs to combine ALL the head chefs into one master kitchen.
//  This is just Redux's API design.