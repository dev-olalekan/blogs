const Bloglist = (props) => {
  const blogss = props.blogprops;
  const titless = props.title;
  // const handleDeleting = props.handleDeletes;
  return (
    <div className="blog-list">
      <h2>{titless}</h2>
      {blogss.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          {/* <button onClick={() => handleDeleting(blog.id)}>Delete button</button> */}
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
