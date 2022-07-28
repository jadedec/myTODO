import "./ToDoList.scss";
import TODO from "../TODO/TODO.jsx";


const ToDoList = ({array,tickTask,deleteTask}) => {
    
    const cardJSX = array.map((task) => {
        return (
            <TODO
                key={task.id}
                id={task.id}
                content={task.content}
                isDone={task.isDone}
                tickTask={(id)=>tickTask(id)}
                deleteTask={(id)=>deleteTask(id)}
            />
        )
    });

    return (
        <div className="TODOList">
            {cardJSX}
        </div>

    )
};

export default ToDoList;