import React from "react";

const Todos = ({ todos }) => {
  return todos.length > 0 ? (
    <ul className="todos">
      {todos.map((todo) => (
        <li key={todo.id} className="todos__item">
          <span
            className={
              todo.status ? "todos_text  todos__text--done" : "todos_text"
            }
          >
            {todo.name}
          </span>
          <div className="todos_buttons">
            <button href="#">❌</button>
            <button disabled={todo.status} href="#">
              ✅
            </button>
          </div>
        </li>
      ))}
    </ul>
  ) : null;
};

export default Todos;
