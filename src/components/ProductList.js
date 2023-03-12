import React from 'react';
import products from './products.json';

const ProductCard = ({title, description, price, rating, image}) => {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative pb-2/3">
          <img
            className="absolute h-full w-full object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-gray-700 text-base mb-2">{description}</p>
          <div className="flex items-center mb-2">
            <span className="font-bold text-lg text-gray-800">₹{price}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="ml-2 text-gray-700 font-bold">{rating}/5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
