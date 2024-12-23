import {useState,useEffect} from 'react'

export default function useFetch(url,setIsLoading) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

     // Fetching products
     useEffect(() => {
        let abortController = new AbortController();
        let signal = abortController.signal;
        setIsLoading(true);
        fetch(url,{
            signal
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Opps! Something went wrong');
            }
            return response.json()
        }).then((data) => setData(data)).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setIsLoading(false);
        });

        // Clean Up
        return () =>  abortController.abort();
    }, [url]);

    return { data, error };
}
