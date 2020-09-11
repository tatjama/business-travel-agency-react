import {usestate, useEffect} from 'react';

const useStateWithSessionStorage = (sessionStorageKey)=>{
    const [value, setValue] = useState(sessionStorage.getItems(sessionStorageKey) || "");

    useEffect(() =>{
        sessionStorage.setItem(sessionStorageKey, value)
    }, [value])

return [value, setValue];
}

export default useStateWithSessionStorage;