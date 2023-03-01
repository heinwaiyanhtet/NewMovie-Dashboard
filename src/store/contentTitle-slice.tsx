import { createSlice } from "@reduxjs/toolkit";

interface ContentTitleSliceType {
    contentTitle: string[];
}

interface ContentTitleState {
    contentTitle: string[];
}
  
const contentTitleSlice = createSlice({
    name:"contentSlice",
    
    initialState : {
        contentTitle : [],
    } as ContentTitleState,

    reducers : {
        addToTitle(state,action){
            const newItem = action.payload;
            if(action.type = "contentSlice/addToTitle")
                state.contentTitle = newItem;
                // return {
                //     ...state,
                //     contentTitle: [...state.contentTitle, newItem]
                // }
        }
    }
})

export const contentTitleActions = contentTitleSlice.actions;
export type contentTitleSliceState = ContentTitleSliceType;
export default contentTitleSlice;