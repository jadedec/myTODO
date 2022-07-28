import "./ToDoList.scss";
import TODO from "../TODO/TODO.jsx";


const ToDoList = ({array,tickTODO,deleteTODO}) => {
    const cardJSX = array.map((task, index) => {
        return (
            <TODO
                key={task+index}
                index={index}
                task={task}
                tickTODO={tickTODO}
                deleteTODO={deleteTODO}
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