import { useEffect, useState } from "react";

const HooksMouseMove = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const logMousePosition = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => window.removeEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <div>
      X - {coordinates.x} , Y - {coordinates.y}
    </div>
  );
};

export default HooksMouseMove;
