import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="blog-detail">
      <h2>detailss of blogs {id}</h2>
    </div>
  );
};

export default BlogDetails;
