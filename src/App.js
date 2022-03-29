import { useEffect, useState } from "react";

import "./App.css";
import TaskDetails from "./TaskDetails";
import Button from "@mui/material/Button";

function App() {
  const [arr, setArr] = useState([]);
  const [tasks, settasks] = useState("");

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setArr(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (a) => {
    const result = arr.filter((t) => t.id !== a);

    setArr(result);
  };

  const handleAdd = () => {
    const min = Math.ceil(1500);
    const max = Math.floor(2000);
    const id = Math.floor(Math.random() * (max - min) + min);
    const obj = {
      userId: 100,
      id: id,
      title: tasks,
      completed: false,
    };

    setArr([obj, ...arr]);
    settasks("");
  };

  return (
    <div className="text-center space-y-5 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold">You Tasks</h1>

      <div className="flex w-1/2 justify-around">
        <input
          type="text"
          placeholder="Enter the task here"
          onChange={(e) => {
            settasks(e.target.value);
          }}
          className="border-2 p-2 rounded-3xl w-1/2"
        />
        <Button
          variant="outlined"
          onClick={() => {
            handleAdd();
          }}
        >
          {" "}
          Add task here
        </Button>
      </div>

      {arr.map((a, key) => (
        <div key={key} className="flex w-1/2 justify-between h-11">
          <TaskDetails taskName={a.title} done={a.completed} />

          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              handleDelete(a.id);
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}

export default App;
