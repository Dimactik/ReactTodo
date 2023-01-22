import Task from "./Task";

function TasksList({ todos, status, deleteTask, toggleDone }) {
  return (
    <>
      {todos.map((item, index) => (
        <Task
          title={item.title}
          status={item.status}
          key={item.id}
          id={item.id}
          onDelete={() => deleteTask(item.id)}
          toggleDone={() => toggleDone(item.id)}
        />
      ))}
    </>
  );
}

export default TasksList;
