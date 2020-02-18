import React from "react";

export default ({
  task: { title, body, _id, isCompleted },
  onDelete,
  onComplete
}) => {
  return (
    <div>
      <h2 style={isCompleted ? { textDecoration: "line-through" } : {}}>
        {title ? title : null}
      </h2>
      <p>{body ? body : null}</p>
      <button type="button" onClick={() => onDelete(_id)}>
        Remove
      </button>
      <button type="button" onClick={() => onComplete(_id)}>
        Complete
      </button>
    </div>
  );
};
