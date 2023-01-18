import { useState, useEffect } from "react";
import axios from "axios";
const HooksDataFetching = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>Todos : </h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HooksDataFetching;
