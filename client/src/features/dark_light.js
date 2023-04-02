import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMood:false
}

const darkMoodSlicer = createSlice({
    initialState,
    name:"Dark and Light Mood",
    reducers:{
        darkmood: (state) => {
            state.darkMood = !state.darkMood
        }
    }
})

export const {darkMood} = darkMoodSlicer.actions;

export default darkMoodSlicer.reducer;