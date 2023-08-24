import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  });

  // fetch to braking bad api
  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data: data.results,
      isLoading: false,
      hasError: null
    });
  };

  useEffect(() => {
    getFetch();
    // return () => {
    //   second
    // }
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
};
