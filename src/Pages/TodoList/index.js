import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const todo = {
        id: Date.now(),
        title: newTodo,
        completed: false,
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const renderTodoList = () => {
    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              {todo.title}
            </span>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="title">Todo List</h1>
      <input
        className="input"
        type="text"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button className="button" onClick={addTodo}>
        Add
      </button>

      {renderTodoList()}
    </div>
  );
};

export default TodoList;
