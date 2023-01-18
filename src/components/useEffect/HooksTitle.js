import { useEffect, useState } from "react";
const HooksTitle = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </>
  );
};

export default HooksTitle;
