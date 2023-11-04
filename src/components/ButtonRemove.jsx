import React from "react";

function ButtonRemove({ id, deleteTodo }) {
  return (
    <button className="btn btn-remove" onClick={() => deleteTodo(id)}>
      Remove
    </button>
  );
}

export default ButtonRemove;
