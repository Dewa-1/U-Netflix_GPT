import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        selectedLanguage: "en",       //container jo selected language ko store karega
    },
    reducers: {
        changeLanguage: (state, action) => {       
            state.selectedLanguage = action.payload;   //yha par hmara payload me selected language aa jayegi
        },

    },
});

export const {changeLanguage} = languageSlice.actions;
export default languageSlice.reducer;