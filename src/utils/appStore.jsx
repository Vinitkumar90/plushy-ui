import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionReducer from "./connectionSlice"
import requestReducer from "./requestSlice"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        feed: feedReducer,
        connection: connectionReducer,
        request: requestReducer,
    }
})
export default appStore;



// Why "reducer" again in the store? 
// Because the store needs to combine ALL the head chefs into one master kitchen.
//  This is just Redux's API design.