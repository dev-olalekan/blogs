import { useState } from "react";
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
      id: 3,
    },
    { title: "my port dock", body: "one tunnel", author: "olaleka", id: 1 },
  ]);

  return (
    <div className="home">
      <Bloglist blogprops={blogs} title="ALL for Bloger" />
      <Bloglist
        blogprops={blogs.filter((blog) => blog.author == "olalekan")}
        title="ola news"
      />
    </div>
  );
};

export default Home;
