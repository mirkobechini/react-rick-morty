import {NavLink} from "react-router-dom"

export default function AppHeader({menu}) {

    return (
        <header>
            <nav className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <strong>Rick e Morty</strong>
                </div>
                <ul className="list-unstyled d-flex gap-2 mt-2">
                   
                   {menu.map(item =>

                    <li key={item.id}>
                        <NavLink className="nav-link" to={item.link}>{item.text}</NavLink>
                    </li>
                   )}

                </ul>
            </nav>
        </header>
    )
}