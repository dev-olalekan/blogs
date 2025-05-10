import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./usefetch";

const Home = () => {
  const {
    datas: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  /* const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data for that resources");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // console.log(err.message);
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []); */

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogprops={blogs} title="ALL for Bloger" />}

      {/* <button onClick={() => setName("adriano")}>click me</button> */}
    </div>
  );
};

export default Home;
