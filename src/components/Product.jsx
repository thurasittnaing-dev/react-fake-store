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
            <div className="product-card flex-col py-2">
                <div className='px-2'>
                    <a href="#" className='flex justify-center'>
                        <img className="product-image" src={product.image} alt="product image" />
                    </a>

                    <div className="">
                        <div className="font-semibold tracking-tight text-gray-900 dark:text-white h-14 max-h-14">
                            {truncateString(product.title, 45)}
                        </div>

                        <div className="flex items-center mt-4">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <StarRating rating={product.rating.rate} />
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating.rate}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col px-2">
                    <span className="price-text">${product.price}</span>
                    <a href="#" className="add-to-cart-btn">Add to cart</a>
                </div>
            </div>
        </>
    )
}
