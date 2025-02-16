import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from '../data/db.json';

export const fetchFAQ = createAsyncThunk("faqSlice/fetchFAQ", async() => {
    return data.FAQ;
})

const faqSlice = createSlice({
    initialState: [],
    name: 'faqSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFAQ.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default faqSlice.reducer;