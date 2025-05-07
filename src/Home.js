import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(28);

  const handleClick = () => {
    setName("luigi");
    setAge(15);
  };

  return (
    <div className="home">
      <h2>homepage</h2>
      <p>
        my name is {name} and i am {age} years old
      </p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Home;
