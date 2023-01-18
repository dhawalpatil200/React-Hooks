import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count title="age" count={age} />
      <Button handleClick={incrementAge}>Increment age</Button>
      <Count title="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
  );
};

export default ParentComponent;
