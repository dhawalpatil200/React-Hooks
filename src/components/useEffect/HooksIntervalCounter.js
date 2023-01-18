import { useState, useEffect } from "react";

const HooksIntervalCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => setCount((prevCount) => prevCount + 1);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1 style={{ textAlign: "center" }}>{count}</h1>;
};

export default HooksIntervalCounter;
