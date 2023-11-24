import { useState } from "react";
import "./App.css";

function App() {
  const [id, SetId] = useState(0);
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchToDoById = async (id) => {
    setLoading(true);
    setError(null);
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (res.ok) {
      const data = await res.json();
      setTodo(data);
      console.log(data);
    } else {
      setError("This todo does not exist in our big juicy database");
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => SetId(e.target.value)} />
      <button onClick={() => fetchToDoById(id)}>fetch</button>
      {loading && <h1>LOADING !!!</h1>}
      {error && <p>{error}</p>}

      {todo && <h1>Title : {todo.title} </h1>}
    </div>
  );
}

export default App;
