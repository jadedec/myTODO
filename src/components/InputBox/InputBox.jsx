import "./InputBox.scss";


const Input = ({handleInput,handleSubmit}) => {
    

    return (
        <form className="new-input" onSubmit={handleSubmit}>
            <label
                htmlFor="new-input"
                className="new-input__label">
                NEW TO DO:
            </label>
            <input
                type="text"
                className="new-input__text"
                name="text"
                placeholder="task here"
                onChange={handleInput}
            />
            <button
                className="new-input__button"
                type="submit">
                +
            </button>
        </form>
    )
};



export default Input;