import { useEffect, useState } from "react";
import TasksList from "./TasksList";
import Header from "./Header";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(false);
  const URL = "https://63c610b5e1292e5bea2f5ad2.mockapi.io/todos/";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  function addTask(item) {
    setTodos((prev) => [...prev, item]);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };
    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function deleteTask(id) {
    setTodos((prev) => prev.filter((item) => item.id !== id));
    fetch(`${URL}${id}`, {
      method: "DELETE",
    });
  }

  function toggleDone(id) {
    let todo = todos.filter((item) => item.id === id);
    const obj = todo[0];
    obj.status = obj.status ? false : true;
    const status = obj.status;
    setStatus((prevState) => !prevState);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    };

    fetch(`${URL}${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="main">
      <h3>ToDo List</h3>
      <Header todos={todos} status={status} addTask={addTask} />
      {todos.length > 0 ? (
        <TasksList
          todos={todos}
          status={status}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      ) : (
        <h4 className="empty">Empty ToDo list</h4>
      )}
    </div>
  );
}

export default App;
