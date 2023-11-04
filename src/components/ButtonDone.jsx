import React from "react";

function ButtonDone({ id, markDone }) {
  return (
    <button className="btn btn-done" onClick={() => markDone(id)}>
      Done
    </button>
  );
}

export default ButtonDone;
