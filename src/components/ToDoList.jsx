import React from "react";
import ToDoCart from "./ToDoCart";

function ToDoList(props) {
  const { todos } = props;
  return (
    <div>
      <ul className="to-do-list">
        {todos.map((todo, todoIndex) => (
          <ToDoCart {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </ToDoCart>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
