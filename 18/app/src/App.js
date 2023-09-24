import React from "react";
import { useState } from "react";

function App() {
  const [todo, settodo] = useState([]);
  const [todotitle, settodotitle] = useState("");
  const todoadded = (e) => {
    e.preventDefault();
    settodo([...todo, todotitle]);
    settodotitle("");
  };
  const todotitlechanged = (e) => {
    settodotitle(e.target.value);
  };
  const removetodo = (index) => {
    const newtodo = todo.filter((_, i) => i !== index)
    console.log(todo)
    settodo(newtodo);
  };
  return (
    <>
      <form onSubmit={todoadded}>
        <input
          type="text"
          value={todotitle}
          onChange={todotitlechanged}
          placeholder="enter your todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <br />
      <ul>
        {todo.map((data, index) => {
          return (
            <li>
              <h1>{data}</h1>
              <button onClick={() => removetodo(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
