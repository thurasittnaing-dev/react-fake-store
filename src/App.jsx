import {useState,useEffect, useCallback} from 'react'
import useFetch from './hooks/useFetch';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import LoadingGallaryView from './components/LoadingGallaryView';

function App() {
    const apiEndPoint = "https://fakestoreapi.com/products";
    const [url, setURL] = useState(apiEndPoint);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("");
    const {data : products, error} = useFetch(url,setIsLoading);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);


    const filterProducts = (keyword) => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredProducts(filtered);
    }
    const handleCategoryChange = (category) => {
        let changeURL = category == "" ? apiEndPoint : `${apiEndPoint}/category/${category}`;
        setURL(changeURL);
        setActiveCategory(category);
    }

    let data = filteredProducts ? filteredProducts : products;

    let loadingGallaryViewData = {
        handleCategoryChange,
        activeCategory
    }

    let productListData = {
        products : data,
        handleCategoryChange,
        activeCategory
    }



    return (
        <>
            <Navbar filterProducts={filterProducts} />
            {
                error && <div className="mt-[20%] text-center text-red-500 select-none">{error}</div>
            }
            {
                !error && <div>
                    {
                        isLoading ?
                        <LoadingGallaryView data={loadingGallaryViewData}  /> : <ProductList data={productListData} />
                    }
                </div>
            }
        </>
    );
}

export default App
