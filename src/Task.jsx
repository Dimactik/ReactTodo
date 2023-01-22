function Task({ id, title, status, onDelete, toggleDone }) {
  let classContext = status ? "green" : null;

  return (
    <div className={`task ${classContext}`}>
      <p className="taskText">{title}</p>
      <input
        className="taskDoneRadio"
        onClick={() => toggleDone(id)}
        type="radio"
      />
      <button className="crest" onClick={() => onDelete(id)}>
        X
      </button>
    </div>
  );
}

export default Task;
