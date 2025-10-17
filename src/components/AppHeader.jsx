export default function AppHeader({ fetchData }) {
    return (
        <header>
            <nav className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <strong>Rick e Morty</strong>
                </div>
                <ul className="list-unstyled d-flex gap-2 mt-2">
                    <li>
                        <a className="nav-link" href="">Characters</a>
                    </li>
                    <li>
                        <a className="nav-link" href="">About</a>
                    </li>
                    <li>
                        <a className="nav-link" href="">Contacts</a>
                    </li>
                </ul>
                <button className='btn btn-dark' value="1" onClick={fetchData}>
                    <i className="bi bi-download"></i> Fetch data
                </button>
            </nav>
        </header>
    )
}