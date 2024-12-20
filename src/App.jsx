import {useState,useEffect, useCallback} from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import LoadingGallaryView from './components/LoadingGallaryView';

function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [url, setURL] = useState("https://fakestoreapi.com/products");
    const [activeCategory, setActiveCategory] = useState("");
    const [products, setProducts] = useState([]);

    const fetchProducts = useCallback(async () => {
        // Fetching products
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setIsLoading(false)
       });
   },[url])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts]);

    const handleCategoryChange = (category) => {
        setIsLoading(true)
        setURL(category == "" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${category}`);
        setActiveCategory(category);
    }

    let loadingGallaryViewData = {
        handleCategoryChange,
        handleCategoryChange,
        activeCategory
    }

    let productListData = {
        products,
        handleCategoryChange,
        activeCategory
    }

    return (
        <>
            <Navbar />
            {
                isLoading ?
                <LoadingGallaryView data={loadingGallaryViewData}  /> : <ProductList data={productListData} />
            }
        </>
    );
}

export default App
