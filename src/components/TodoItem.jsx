import React from "react";

function TodoItem({ id, title, markDone, deleteTodo }) {
  return (
    <div className="todo-item">
      <div className="todo-item__content">
        <p>{title}</p>
      </div>
      <div className="todo-item__actions">
        <button className="btn btn-done" onClick={() => markDone(id)}>
          Done
        </button>
        <button className="btn btn-remove" onClick={() => deleteTodo(id)}>Remove</button>
      </div>
    </div>
  );
}

export default TodoItem;
