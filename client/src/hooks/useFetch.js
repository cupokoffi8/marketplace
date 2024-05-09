import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log("Requesting URL:", endpoint); // Add this line for debugging
        // Construct the complete URL including the endpoint
        const httpBaseUrl = `https://${process.env.REACT_APP_API_URL}`;
        const url = `${httpBaseUrl}${endpoint}`;
        const res = await makeRequest({ baseURL: httpBaseUrl }).get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;