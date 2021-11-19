import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      const response = await fetch(url);

      if (!response.ok) {
        return Promise.reject(response);
      } else {
        const dataJSON = await response.json();
        dataJSON.results ? setData(dataJSON.results) : setData([dataJSON]);
      }
    }

    try {
      fetchData();
    } catch (err) {
      console.log(err.message);
    }
  }, [url]);

  return data;
}
