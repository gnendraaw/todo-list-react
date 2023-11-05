import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ category, todos, markDone, markUndo, deleteTodo }) {
  return (
    <div className="todo-list">
      <h2>{category}</h2>
      {todos.length > 0 ? (
        <div className="content">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              markDone={markDone}
              markUndo={markUndo}
              deleteTodo={deleteTodo}
              {...todo}
            />
          ))}
        </div>
      ) : (
        <div className="content">No items</div>
      )}
    </div>
  );
}

export default TodoList;
