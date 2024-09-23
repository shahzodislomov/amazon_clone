import React, { useState } from 'react';
import { productData } from '../constants/ProductData';
import Home from './home';

const GetProductData = () => {
  const [showMessage, setShowMessage] = useState(false)
  return (
    <div className='grid grid-cols-3 gap-5 relative'>
          {showMessage ? (
          <div className='left-[88%] top-5 bg-yellow-400 py-3 px-2 rounded-xl animate-bounce fixed'>
            <p className='text-sm'>Item added to cart</p>
          </div>
        ) : null}
      {productData.map((product,index) => (
        <Home key={index} product={product} setShowMessage={setShowMessage} />
      ))}
    </div>
  );
};

export default GetProductData;
