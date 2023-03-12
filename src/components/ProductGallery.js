
import React from 'react'
import Cards from './Cards'


const ProductGallery = () => {
  return (
    <div className='flex flex-row justify-center gap-5 pt-3'>
      <Cards />
      <Cards />
      <Cards />
    </div>
  )
}

export default ProductGallery
