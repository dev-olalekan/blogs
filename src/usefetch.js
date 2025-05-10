// here we are creating custom hook and it must start with use
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data for that resources");
          }
          return res.json();
        })
        .then((data) => {
          setDatas(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // console.log(err.message);
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
  return { datas, isPending, error };
};

export default useFetch;
