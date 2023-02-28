import { createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";

const contentTitleSlice = createSlice({
    name:"contentSlice",
    initialState:{
        contentTitle : [],
    },

    reducers:{
        addToTitle(state,action){
            const newItem = action.payload;
            state.contentTitle.push(newItem);
        }
    }
})

export const contentTitleActions = contentTitleSlice.actions;
export default contentTitleSlice;