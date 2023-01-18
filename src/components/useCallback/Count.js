import React from "react";
const Count = ({ title, count }) => {
  console.log(`Rendering ${title}`);

  return (
    <div>
      {title} - {count}
    </div>
  );
};

export default React.memo(Count);
