import { configureStore } from "@reduxjs/toolkit";
import getProducts from "../reducers/getProduct";

export const store = configureStore({
  reducer:{
    product: getProducts
  }
})