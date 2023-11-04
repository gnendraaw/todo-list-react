import React from "react";
import ButtonDone from "./ButtonDone";
import ButtonUndo from "./ButtonUndo";
import ButtonRemove from "./ButtonRemove";

function TodoItem({ id, title, desc, isDone, markDone, markUndo, deleteTodo }) {
  return (
    <div className="todo-item">
      <div className="todo-item__content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="todo-item__actions">
        {!isDone ? (
          <ButtonDone id={id} markDone={markDone} />
        ) : (
          <ButtonUndo id={id} markUndo={markUndo} />
        )}

        <ButtonRemove id={id} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default TodoItem;
