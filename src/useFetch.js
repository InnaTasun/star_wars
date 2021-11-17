import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      const response = await fetch(url);
      const dataJSON = await response.json();
      dataJSON.results ? setData(dataJSON.results) : setData([dataJSON]);
    }

    fetchData();
  }, [url]);

  return data;
}
