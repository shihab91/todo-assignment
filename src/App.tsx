import React, { FC, useState, useEffect } from "react";
import "./App.css";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

const App: FC = () => {
  const getTodos = () => {
    const allTodos = localStorage.getItem("todos");
    return allTodos ? JSON.parse(allTodos) : [];
  };
  const [inputData, setInputData] = useState("");
  const [todos, setTodos] = useState<string[]>(getTodos());
  const addItem = () => {
    if (!inputData) {
      alert("Please enter a todo");
    } else {
      const rest = [...todos, inputData];
      setTodos(rest);
    }
  };
  const deleteTodo = (todo: string) => {
    const rest = todos.filter((t) => t !== todo);
    setTodos(rest);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter the task"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={addItem} className="icon">
          {" "}
          <AiOutlinePlus />
        </button>
      </div>{" "}
      <div className="todos-container">
        <div className="todos">
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <p key={index}>{todo}</p>
                <button
                  onClick={() => deleteTodo(todo)}
                  className="icon delete-icon"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
