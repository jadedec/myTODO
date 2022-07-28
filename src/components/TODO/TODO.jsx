import "./TODO.scss";



const TODO = ({id,content,tickTask,editTask,deleteTask}) => {
    
    return (
        <div className="card">
            <form className="card-box">
                <input
                    className="card-box__checkbox"
                    type="checkbox"
                    onChange={tickTask}
                />
                <label
                    htmlFor="task"
                    className="card-box__task">
                    {content}
                </label>
                </form>
            <div className="card-buttons">
                <button
                    className="card-buttons__button"
                    onClick={editTask}>
                    EDIT
                </button>
                <button
                    className="card-buttons__button"
                    onClick={(id)=>deleteTask(id)}>
                    DELETE
                </button>
            </div>

        </div>
    )
}


export default TODO;