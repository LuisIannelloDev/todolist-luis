import React, { useState } from "react";
import ToDoApp from "./TodoApp";

// Crear tu primer componente
const Home = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const tarea = () => {
    return todos.length === 1 ? "tarea" : "tareas";
  };

  // Add into array -> concat
  // Delete from array -> filter
  // Update -> map

  return (
    <div className="container">
      <h1>My TodoList</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat(value));
                setValue("");
              }
            }}
            placeholder="What do you need to do?"
          />
          <button
            className="btn btn-primary" // Clase de Bootstrap para el estilo del botón
            onClick={() => {
              setTodos(todos.concat(value));
              setValue("");
            }}
          >
            Agregar Tarea
          </button>
        </li>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <i
              className="fas fa-trash-alt"
              onClick={() =>
                setTodos(
                  todos.filter((_, currentIndex) => index !== currentIndex)
                )
              }
            ></i>
          </li>
        ))}
      </ul>
      <span>
        {todos.length} {tarea()} pendientes.
      </span>
    </div>
  );
};

export default Home;
