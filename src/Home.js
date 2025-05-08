import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my new website",
      body: "body of letter",
      author: "olalekan",
      id: 1,
    },
    {
      title: "my prestige web",
      body: "passage website",
      author: "msc robert",
      id: 2,
    },
    { title: "my port dock", body: "one tunnel", author: "olaleka", id: 3 },
  ]);

  const [name, setName] = useState("romario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("run okay");
    console.log(blogs);
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <Bloglist
        blogprops={blogs}
        title="ALL for Bloger"
        handleDeletes={handleDelete}
      />

      <button onClick={() => setName("adriano")}>click me</button>
      <p>{name}</p>
      {/* <Bloglist
        blogprops={blogs.filter((blog) => blog.author == "olalekan")}
        title="ola news"
      /> */}
    </div>
  );
};

export default Home;
