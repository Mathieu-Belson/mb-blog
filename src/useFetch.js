import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController(); // this is an object that allows us to cancel the fetch request when we want to. We can use it to cancel the fetch request when the component is unmounted
        
         setTimeout(() => {
            fetch(url, {signal: abortCont.signal}) //get request to localhost. fetch returns a promise which is an object that represents the eventual completion or failure of an asynchronous operation
                .then(res => {
                    if(!res.ok) {
                    throw Error('could not fetch the data for that resource') // works with the catch block below
                    }
                    return res.json();
                })
                .then(data => { // this is the data we get back from the json server
                    setData(data);
                    setIsPending(false);
                    setError(null); // if we get the data successfully, we set the error to null
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                    setIsPending(false);
                    setError(err.message);
                    }
                })
        }, 1000);

    return () => abortCont.abort(); // this is a cleanup function that runs when the component is unmounted. It cancels the fetch request
    }, [url]); // dependency array is used when we want to run the useEffect hook only when a certain value changes. If we want to run it only once, we leave the dependency array empty
    
    return { data, isPending, error }
}

export default useFetch;