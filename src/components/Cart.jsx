import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAll, removeOne } from '../reducers/getProduct';

const Cart = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch()
  console.log(products);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
          <button className="text-blue-600 underline" onClick={() => dispatch(removeAll())}>Deselect all items</button>
        </div>
        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <img
                src={product.url}
                alt={product.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-grow ml-4">
                <h3 className="text-lg font-medium">{product.title}</h3>
                <div className="flex items-center space-x-2 text-yellow-500">
                  <span>★★★★★</span>
                </div>
                <div className="text-sm text-blue-600 mt-1">
                  <label>
                    <input type="checkbox" className="mr-1" /> This is a gift
                  </label>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">${product.cost}</p>
                <button className="text-red-500 mt-2" onClick={() => dispatch(removeOne(product.id))}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-gray-600">
              Subtotal ({products.length} items):{' '}
              <span className="font-semibold">
                ${products.reduce((acc, item) => acc + item.cost, 0).toFixed(2)}
              </span>
            </p>
            <label className="text-sm text-blue-600">
              <input type="checkbox" className="mr-1" /> This order contains a gift
            </label>
          </div>
          <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg shadow-lg">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
