import React from "react";

function ButtonUndo({ id, markUndo }) {
  return (
    <button className="btn btn-undo" onClick={() => markUndo(id)}>
      Undo
    </button>
  );
}

export default ButtonUndo;
