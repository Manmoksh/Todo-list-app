import "./App.css";
import TodoContainer from "./components/TodoContainer";
import InputContainer from "./components/InputContainer";
import { useState } from "react";
function App() {
  let [inputVal, setInputVal] = useState("");

  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }
  function addTodo() {
    setInputVal((inputVal = inputVal.trim()));
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevtodosIndex) => {
        return prevtodosIndex != todoIndex;
      })
    );
  }

  return (
    <main>
      <h1>Todo-List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />

      <TodoContainer todos={todos} delTodo={delTodo} />
    </main>
  );
}

export default App;
