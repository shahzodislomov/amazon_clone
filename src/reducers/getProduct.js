import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../constants/ProductData";

const getProduct = createSlice({
  name: 'getProduct',
  initialState: {
    products: [],
    product: {},
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = productData.filter(item => item.id === action.payload);
    },
  
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeOne: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload);
    },
    removeAll: (state) => {
      state.products = [];
    }
  }
});

export const { getProducts, addProduct, removeOne, removeAll } = getProduct.actions;
export default getProduct.reducer;
