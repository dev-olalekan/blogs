import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>the blogs</h1>
      <div className="links">
        <Link to="/">home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          create blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
