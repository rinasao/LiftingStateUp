import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(["item 1", "item 2", "item 3"]);

  return (
    <div className="App">
      <TodoCount todos={todos} />
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

function TodoCount({ todos }) {
  return <div>Total todos : {todos.length}</div>;
}
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
function AddTodo({ setTodos }) {
  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos((prevTodos) => [...prevTodos, todo]);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Submit</button>
    </form>
  );
}
