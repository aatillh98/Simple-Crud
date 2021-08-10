import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./components/UserSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});