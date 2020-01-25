import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {

    // retrieve an item from local storage
    // if item doesnt exist it will return undefined
    const [storedValue, setStoredValue] = useState(() => {
        // get from local storage by key 
        const item = window.localStorage.getItem(key);
        // return and parse JSON if undefined, return initialValue
        return item ? JSON.parse(item): initialValue;
    });

    const setValue = value => {
        // Save State
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];

};
