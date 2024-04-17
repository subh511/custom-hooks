//import React from 'react'
import { useState,useEffect } from "react";
function useDebounce(value, delay){
    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      // Set up a timer to update the debounced value after the specified delay
      const timerId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      // Clean up the timer if the value changes before the delay has passed
      return () => clearTimeout(timerId);
    }, [value, delay]);
  
    return debouncedValue;
  }
export default function SearchBar() {

    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 500);

  return (
    <div>
    your debounced value is : {debouncedValue}
    <br/>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}
