import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace 'https' with 'http' in the base URL
        const httpBaseUrl = `${process.env.REACT_APP_API_URL}`;
        const res = await makeRequest({ baseURL: httpBaseUrl }).get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
