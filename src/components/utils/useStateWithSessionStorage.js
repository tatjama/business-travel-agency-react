import {useState, useEffect} from 'react';

const useStateWithSessionStorage = (sessionStorageKey)=>{
    const [value, setValue] = useState(sessionStorage.getItem(sessionStorageKey) || "");

    useEffect(() =>{
        sessionStorage.setItem(sessionStorageKey, value)
    }, [value, sessionStorageKey])

return [value, setValue];
}

export default useStateWithSessionStorage;