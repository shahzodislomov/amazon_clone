import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, getProducts } from '../reducers/getProduct';

const Home = ({ product, setShowMessage }) => {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    setShowMessage(true)
    dispatch(addProduct(item));
    setTimeout(() => {
      setShowMessage(false)
    }, 1000)
  };

  return (
    <>
      <div className="flex gap-5 mx-auto justify-between text-center p-10">
        <div className="border-2 flex flex-col flex-1 gap-5 items-start p-5 rounded-lg w-full">
          <div className="text-center justify-center">
            <img className="w-full" alt={product.title} src={product.url} />
          </div>
          <div className="flex gap-3">
            <h3 className="w-20">Price:</h3>
            <h3 className="font-bold text-lg">${product.cost}</h3>
          </div>
          <div className="flex gap-3">
            <h3 className="w-20">Brand: </h3>
            <h3 className="flex-1">{product.title}</h3>
          </div>
          <div className="flex gap-3">
            <h3 className="w-20">Model:</h3>
            <h3 className="flex-1">{product.query}</h3>
          </div>
          <div className="flex gap-3">
            <h3 className="w-20">Ships from:</h3>
            <h3 className="flex-1">Amazon.com</h3>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-[#FFD814] mx-auto cursor-pointer text-center border shadow-lg rounded-lg px-3 py-2 hover:bg-[#F7CA00] text-[#232f3e]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
