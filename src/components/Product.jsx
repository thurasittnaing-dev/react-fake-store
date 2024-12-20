import React from 'react'
import StarRating from './StarRating'

export default function Product({product,handleCategoryChange}) {

    const truncateString = (str, limit) => {
        if (str.length > limit) {
          return str.substring(0, limit) + "...";
        }
        return str;
      };

    return (
        <>
            <div className="w-full max-w-sm relative border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-white">
                    <a href="#" className='flex justify-center'>
                        <img className="p-8 rounded-t-lg  h-48 object-fill transition-all duration-300 hover:scale-110" src={product.image} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <div className="max-h-40 min-h-40">
                            <div className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                                {truncateString(product.title, 50)}
                            </div>

                            <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <StarRating rating={product.rating.rate} />
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating.rate}</span>
                            </div>

                            <a href="#" onClick={() => handleCategoryChange(encodeURIComponent(product.category))}>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{product.category}</span>
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                            <a href="#" className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
            </div>
        </>
    )
}
