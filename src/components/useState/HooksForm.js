import { useState } from "react";

const HooksForm = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <input
        type="text"
        placeholder="Firstname"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Lastname"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h1>firstName : {name.firstName}</h1>
      <h1>lastName : {name.lastName}</h1>
    </>
  );
};

export default HooksForm;
