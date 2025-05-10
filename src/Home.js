import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("romario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    // console.log("run okay");
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        // console.log(data);
      });
    // console.log(blogs);
    // console.log(name);
  }, []);

  return (
    <div className="home">
      {blogs && (
        <Bloglist
          blogprops={blogs}
          title="ALL for Bloger"
          handleDeletes={handleDelete}
        />
      )}

      <button onClick={() => setName("adriano")}>click me</button>
      {/* <p>{name}</p> */}
      {/* <Bloglist
        blogprops={blogs.filter((blog) => blog.author == "olalekan")}
        title="ola news"
      /> */}
    </div>
  );
};

export default Home;
