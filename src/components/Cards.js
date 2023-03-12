import React from 'react'
import products from './products.json';
const ProductCards = ({title, description, price, rating, image}) => {
  return (
    <div>
      <div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg ">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src={image}
        alt="" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        {title}
      </h5>
      <p class="mb-4 text-base text-neutral-600">
      {description}
      </p>
      <div className="flex items-center mb-2">
            <span className="font-bold text-lg text-gray-800">₹{price}</span>
          </div>
          <div className="flex items-center">
            
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
  <polygon points="12 2 15.09 8.38 22 9.27 17 14.01 18.18 21.01 12 17.77 5.82 21.01 7 14.01 2 9.27 8.91 8.38" fill="#FFBF00"/>
</svg>

            <span className="ml-2 text-gray-700 font-bold mb-2">{rating}/5</span>
          </div>
          <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
  Buy Now
</button>
    </div>
  </div>
</div>
    </div>
  )
};

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-evenly -mx-4 gap-2 gap-y-4">
      {products.map((product, index) => (
        <ProductCards key={index} {...product} />
      ))}
    </div>
  );
};

export default Cards
