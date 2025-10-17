export default function footer() {
    return (
        <footer className="bg-dark py-5 text-white">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <h3>Rick and Morty</h3>
                        <p> This is a footer</p>
                    </div>
                    <div className="col">
                        <h3>Rick and Morty</h3>
                        <ul className="list-unstyled">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Rick and Morty</h3>
                        <ul className="list-unstyled">
                            <li>
                                <a href="">Privacy</a>
                            </li>
                            <li>
                                <a href="">T&C</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}