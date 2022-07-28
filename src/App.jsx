import { useState } from "react";
import "./App.scss";
import Input from "./components/InputBox/InputBox";
import ToDoList from "./components/ToDoList/ToDoList";


const App = () => {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    {
      content: "test task here",
      isDone:false
    }
  ]);
  
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
  }

  ///////////////////task list function/////////////

  //newTask
  const newTask=(text)=>{
    const obj = { content: text, isDone: false }
    const newTODOs = [...tasks, obj]
    setTasks(newTODOs);
    setInput("");
  }
  //tick on TODO, set it done or undone
  const tickTask = (index) => {
    const newTODOs = [...tasks];
    newTODOs[index].isDone = (!newTODOs[index].isDone);
    setTasks(newTODOs);
  }
  //click on remove,remove the TODO
  const deleteTask = (index) => {
    const newTODOs = [...tasks].splice(index,1);
    setTasks(newTODOs);
  }

  return (
    <>
      <header>MY TODO</header>
      <Input handleInput={handleInput} handleSubmit={handleSubmit} />
      <ToDoList array={tasks} tickTask={tickTask} deleteTask={deleteTask} />
    </>
  );
};

export default App;