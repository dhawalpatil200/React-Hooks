import React, { useState } from "react";

const HooksCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment me </button>
    </div>
  );
};

export default HooksCounter;
