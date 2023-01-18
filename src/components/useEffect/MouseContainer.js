import { useState } from "react";
import HookMouseMove from "./HooksMouseMove";
const MouseContainer = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouseMove />}
    </div>
  );
};

export default MouseContainer;
