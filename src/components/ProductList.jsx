import {useState,useEffect} from 'react'
import Product from "./Product";
import GallaryView from './GallaryView';
import GallaryButtons from './GallaryButtons';

export default function ProductList({data}) {

    let {products,handleCategoryChange,activeCategory} = data;

    return (
    <>
        <GallaryButtons handleCategoryChange={handleCategoryChange} activeCategory={activeCategory} />
        <GallaryView products={products} handleCategoryChange={handleCategoryChange} />
    </>
  )
}
