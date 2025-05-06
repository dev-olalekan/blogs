const Home = () => {
  const handleClick = () => {
    console.log("clihhe");
  };

  const handleClickagain = (name) => {
    console.log("hello " + name);
  };
  return (
    <div className="home">
      <h2>homepage</h2>
      <button onClick={handleClick}>click me</button>
      <button
        onClick={() => {
          handleClickagain("maross");
        }}
      >
        click me again
      </button>
    </div>
  );
};

export default Home;
