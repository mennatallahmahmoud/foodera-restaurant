import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from '../data/db.json';

export const fetchReviews = createAsyncThunk("reviewsSlice/fetchReviews", async() => {
    return data.Reviews;
})

const reviewsSlice = createSlice({
    initialState: [],
    name: "reviewsSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default reviewsSlice.reducer;