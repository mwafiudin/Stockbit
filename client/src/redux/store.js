import { configureStore } from "@reduxjs/toolkit";
import securitiesReducer from "./reducers/securities/securitiesReducer";

export default configureStore({
  reducer: {
    securities: securitiesReducer,
  },
});
