import Todos from "./components/Todos";
import TodoField from "./components/TodoField";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Selam",
      status: false,
    },
    {
      id: 2,
      name: "Naber",
      status: true,
    },
  ]);

  const addTodo = (todo) => {
    if (todo.name) {
      setTodos([...todos, todo]);
    }
  };

  return (
    <div className="App">
      <h1>todos</h1>
      <TodoField addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
