import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ category, todos, markDone, deleteTodo }) {
  return (
    <div className="todo-list">
      <h2>{category}</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          markDone={markDone}
          deleteTodo={deleteTodo}
          {...todo}
        />
      ))}
      <br />
    </div>
  );
}

export default TodoList;
