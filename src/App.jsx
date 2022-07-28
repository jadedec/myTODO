import { useState } from "react";
import "./App.scss";
import Input from "./components/InputBox/InputBox";
import ToDoList from "./components/ToDoList/ToDoList";


const App = () => {

  const [input, setInput] = useState("");
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);
  
    /////////////////input box function//////////
    //pass the typing to input
  const handleInput = (event) => {
    setInput(event.target.value);
  }
  //pass input to TODO list
  const handleSubmit = (event) => {
    //avoid page refresh
    event.preventDefault();
    input && newTask(input);
    //TODO: empty the inputBox after submit
  }

  ///////////////////task list function/////////////

  //newTask
  const newTask = (text) => {
    setId(id + 1);
    const obj = { id:id, content: text, isDone: false }
    const newTODOs = [obj,...tasks]
    setTasks(newTODOs);
    setInput("");
  }
  //tick on TODO, set it done or undone, for future filter
  const tickTask = (id) => {
    const newTODOs = [...tasks];
    newTODOs.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone
        }
      } else {
        return task;
      }
    })
    setTasks(newTODOs);
  }
  
  //click on remove,remove the TODO
  const deleteTask = (id) => {
    const newTODOs = [...tasks];
    newTODOs.filter((task) => {
      return task.id !== id;
    })
    setTasks(newTODOs);
    console.log(tasks);
  }

  // TODO: click on edit, edit the task
  // const editTask = () = {
    
  // }

  return (
    <>
      <header>MY TODO</header>
      <Input handleInput={handleInput} handleSubmit={handleSubmit} />
      <ToDoList array={tasks} tickTask={tickTask} deleteTask={deleteTask} />
    </>
  );
};

export default App;