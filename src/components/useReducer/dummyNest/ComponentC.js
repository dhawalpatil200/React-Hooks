import { useContext } from "react";
import { CountContext } from "../../../App";
const ComponentC = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Inside component C<div>count : {countContext.countState}</div>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentC;
