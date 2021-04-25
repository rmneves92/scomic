import { configureStore } from "@reduxjs/toolkit";
import comicsSlice from "./comicsSlice";

const reducer = {
  comics: comicsSlice,
};

const store = configureStore({ reducer });

export default store;
