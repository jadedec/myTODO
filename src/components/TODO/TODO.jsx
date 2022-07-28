import "./TODO.scss";



const TODO = ({task,index,tickTODO,deleteTODO}) => {
    
    return (
        <div className="card">
            <p className="card-task">{task.content}</p>
            <div className="card-buttons">
                <button
                    className="card-buttons__button"
                    onClick={tickTODO}>
                    *
                </button>
                <button
                    className="card-buttons__button"
                    onClick={deleteTODO}>
                    delete
                </button>
            </div>

        </div>
    )
}


export default TODO;