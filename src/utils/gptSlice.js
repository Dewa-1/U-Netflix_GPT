import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch: false,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
         resetGptSearch: (state) => {
             state.showGptSearch = false;
    },
    }, 
});

export const {toggleGptSearch, resetGptSearch} = gptSlice.actions;
export default gptSlice.reducer;