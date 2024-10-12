import React, { useState } from "react";
function ToDoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <div className="to-do-input">
      <input
        type="text"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Add a new task"
      />{" "}
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default ToDoInput;
