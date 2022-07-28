import "./Header.scss"



const Header = ({ reset }) => {
    return (
        <header>
            <h1>MY TODO</h1>
            <button className="reset" onClick={reset}>
                RESET
            </button>
        </header>
    )
}

export default Header;