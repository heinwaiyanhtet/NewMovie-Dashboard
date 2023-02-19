import { createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";

const routeSlice = createSlice({
    name:"routeSlice",
    initialState:{
        url:"Hello world",
    },

    reducers:{
        // handleNavigation(state,action,navigation){
        //     // if(action.payload.type === "ROUTE_CHANGE"){
        //     //     action.payload.navigation(action.payload.url)
        //     // }
        // }
    }
})

export const routeActions = routeSlice.actions;
export default routeSlice;