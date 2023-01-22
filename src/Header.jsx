import { useState } from "react";

function Header({ todos, status, addTask }) {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="divTasker">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addTask({
              id: todos.length + 1,
              title: value,
              status: false,
            });
            setValue("");
          }}
        >
          <input
            className="inputHigh"
            placeholder="Enter important task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="plus" type="submit">
            +
          </button>
        </form>
      </div>
    </>
  );
}

export default Header;
