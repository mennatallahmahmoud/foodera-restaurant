import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from '../data/db.json';

export const fetchExplore = createAsyncThunk("exploreSlice/fetchExplore", async() => {
    return data.Foods;
})


const exploreSlice = createSlice({
    initialState: [],
    name: 'exploreSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchExplore.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default exploreSlice.reducer;