import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>sorry</h2>
      <p>the page does not exist</p>
      <Link to="/">click to home page</Link>
    </div>
  );
};

export default NotFound;
