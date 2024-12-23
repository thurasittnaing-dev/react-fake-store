import React from 'react'
import Product from './Product'

export default function GallaryView({products,handleCategoryChange}) {

  return (
    <>
      <div className='flex justify-center mb-5'>
        <div className="w-11/12">
            <div className="grid grid-cols-1 md:grid-cols-6 sm:grid-cols-4 gap-4">
                {
                    products && !!products.length && products.map((product) => <Product key={product.id} product={product} handleCategoryChange={handleCategoryChange} />)
                }
            </div>
        </div>
      </div>
    </>
  )
}
