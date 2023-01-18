import { useState, useEffect } from "react";
import axios from "axios";

const HooksDataFetchingTwo = () => {
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        console.log(res);
        setTodo(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h3>Todos : </h3>
      <input
        type="number"
        min="1"
        max="200"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <div>{todo.title}</div>
    </div>
  );
};

export default HooksDataFetchingTwo;
