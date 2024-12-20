import React from 'react'
import GallaryButtons from './GallaryButtons'
import LoadingProduct from './LoadingProduct'

export default function LoadingGallaryView({data}) {
    let {handleCategoryChange,activeCategory} = data
    return (
        <>
            <GallaryButtons handleCategoryChange={handleCategoryChange} activeCategory={activeCategory} />
            <div className='flex justify-center mb-5'>
                    <div className="w-11/12">
                    <div className="grid grid-cols-1 md:grid-cols-6 sm:grid-cols-4 gap-4">
                            <LoadingProduct />
                            <LoadingProduct />
                            <LoadingProduct />
                            <LoadingProduct />
                            <LoadingProduct />
                            <LoadingProduct />
                        </div>
                    </div>
                </div>
        </>
    );
}
