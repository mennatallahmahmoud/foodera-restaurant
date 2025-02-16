import { configureStore } from "@reduxjs/toolkit";
import ExploreSlice from './explore-foods-slice';
import ReviewsSlice from './reviews-slice';
import FAQSlice from './faq-slice';

const store = configureStore({
    reducer: {
        explore: ExploreSlice,
        reviews: ReviewsSlice,
        faq: FAQSlice
    }
})

export default store;