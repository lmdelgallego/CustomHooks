import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (incrementValue = 1) => {
    setCounter((counter) => counter + incrementValue);
  };

  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter((current) => counter - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset
  };
};
