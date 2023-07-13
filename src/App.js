import Todos from "./components/Todos";

import TodoField from "./components/TodoField";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>todos</h1>
      <TodoField />
      <Todos />
    </div>
  );
}

export default App;
