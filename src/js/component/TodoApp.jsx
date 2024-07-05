import React, { useState, useEffect } from "react";

// Crear tu primer componente
const ToDoApp = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [username, setUsername] = useState("");

  const url = "https://playground.4geeks.com/todo/users/" + username;
  const urlTodos = "https://playground.4geeks.com/todo/todos/";
  const urlUserTodos = "https://playground.4geeks.com/todo/todos/" + username;

  console.log(todos);

  // Traer Información
  const getList = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTodos(data.todos);
      console.log(data);
      console.log(todos);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          label: todoInput,
          is_done: false,
        }),
      });
      const data = await res.json();
      setUsername("");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Añadir ToDos
  const addTodo = async () => {
    try {
      const res = await fetch(urlUserTodos, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          label: todoInput,
          is_done: false,
        }),
      });
      const data = await res.json();
      getList();
      setTodoInput("");
      console.log(data);
      console.log(urlUserTodos);
    } catch (error) {
      console.log(error);
    }
  };

  // Borrar ToDos
  const deleteTodo = async (id) => {
    try {
      const res = await fetch(urlTodos + id, {
        method: "DELETE",
        headers: {
          accept: "application/json",
        },
      });
      getList();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  const handleTodo = (e) => {
    setTodoInput(e.target.value);
  };

  const submitTodo = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // Efecto para cargar la lista de todos al cambiar el usuario
  useEffect(() => {
    if (username) {
      getList();
    }
  }, [username]);

  // Aquí empieza el render
  return (
    <div className="container mt-5">
      <h1>Todo App</h1>
      <ul className="list-unstyled">
        <li className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Introduce tu nombre de usuario"
            onChange={handleUser}
            value={username}
          />
          <button className="btn btn-primary me-2" onClick={getList}>
            Login
          </button>
          <button className="btn btn-secondary" onClick={addUser}>
            Register
          </button>
        </li>
        <li className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Añade una tarea"
            onKeyDown={submitTodo}
            onChange={handleTodo}
            value={todoInput}
          />
          <button className="btn btn-primary ms-2" onClick={addTodo}>
            Agregar Tarea
          </button>
        </li>
        {todos &&
          todos.map((todo, index) => (
            <li
              className="d-flex justify-content-between align-items-center mb-2"
              id={todo.id}
              key={index}
            >
              {todo.label}
              <i
                className="fas fa-trash-alt"
                style={{ cursor: "pointer" }}
                onClick={() => deleteTodo(todo.id)}
              ></i>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
