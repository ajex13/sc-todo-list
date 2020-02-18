import React from 'react';

export default ({ task: { title, body, _id }, onDelete }) => {
  return (
    <div>
      <h2>{ title ? title : null }</h2>
      <p>{  body ? body : null  }</p>
      <button type="button" onClick={() => onDelete(_id)}>
        Remove
      </button>
    </div>
  );
};