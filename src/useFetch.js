import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url) //get request to localhost. fetch returns a promise which is an object that represents the eventual completion or failure of an asynchronous operation
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
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, [url]); // dependency array is used when we want to run the useEffect hook only when a certain value changes. If we want to run it only once, we leave the dependency array empty
    
    return { data, isPending, error }
}

export default useFetch;