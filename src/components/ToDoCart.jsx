import React from "react";

function ToDoCart(props) {
  const { children, handleEditTodo, handleDeleteTodo, index } = props;
  return (
    <li className="to-do-item">
      {children}
      <div className="actionContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default ToDoCart;
