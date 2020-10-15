import {useState, useEffect} from 'react';

const useStateWithLocalStorage = (localStorageKey) =>{
    const [value, setValue] = useState(localStorage.getItem(localStorageKey) || "");

    useEffect(() => {
        localStorage.setItem(localStorageKey, value);        
    }, [value]);

    return [value, setValue];
}

export default useStateWithLocalStorage;