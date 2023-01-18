import { useState } from "react";

const HooksCounterTwo = () => {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  return (
    <div>
      <h1>Count : {counter}</h1>
      <button onClick={() => setCounter(initialState)}>Reset</button>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Decrement
      </button>
      <button onClick={incrementByFive}>Increment by 5</button>
    </div>
  );
};

export default HooksCounterTwo;
