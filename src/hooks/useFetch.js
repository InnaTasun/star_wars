import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) {
      return;
    }

    async function fetchData() {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Sorry, the server is not available. Try later');
      } else {
        const dataJSON = await response.json();
        //the response can contain an array of objects (named Results) or a single object
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
