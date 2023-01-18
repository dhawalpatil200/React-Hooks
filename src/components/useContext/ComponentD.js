import { useContext } from "react";
import { collageContext, userContext } from "../../App";
import ComponentE from "./ComponentE";

const ComponentD = () => {
  const user = useContext(userContext);
  const collage = useContext(collageContext);
  return (
    <div>
      {user} - {collage}
      <hr />
      <ComponentE />
    </div>
  );
};

export default ComponentD;
