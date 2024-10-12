import { useState, useEffect } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function Author() {
  return (
    <div className="author">
      Author: Jagadeesh Kumar . S . <br />
      You can contact me through +917397285837 .
    </div>
  );
}

/*************  ✨ Codeium Command ⭐  *************/
/**
 * This is the main application component.
 *
 * It uses the useState hook to keep track of the current list of todos and
 * the todoValue state that is used by the ToDoInput component.
 *
 * It uses the useEffect hook to load the todos from localStorage when the
 * component first mounts.
 *
 * It renders a ToDoInput component and a ToDoList component.
 *
 * @returns {JSX.Element} The main application component.
 */
/******  988b34ea-df6e-42aa-849c-8589c661af16  *******/ function App() {
  const [todos, setTodos] = useState([]);

  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ Todos: newList }));
  }
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, i) => i !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).Todos;
    setTodos(localTodos);
  }, []);
  return (
    <main>
      <Author />
      <ToDoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <ToDoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </main>
  );
}

export default App;
