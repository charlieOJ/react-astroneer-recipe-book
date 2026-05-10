import { useEffect, useState } from "react";

const useFetch = (fetchingFn: () => {}, initialData: any) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialData);

  useEffect(() => {
    const fetching = async () => {
      setIsFetching(true);

      try {
        const data = await fetchingFn();
        setFetchedData(data);
      } catch (error: any) {
        setError(error.message || "Could not fetch data. Try again later.");
      }

      setIsFetching(false);
    };

    fetching();
  }, [fetchingFn]);

  return { isFetching, error, fetchedData, setFetchedData };
};

export default useFetch;
