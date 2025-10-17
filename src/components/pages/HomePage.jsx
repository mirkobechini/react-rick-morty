export default function HomePage({fetchData, characters, setCharacters}) {

    return (
        <>
            <main>
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Rick and Morty characters</h1>
                            <p className="col-md-8 fs-4">
                                Using a series of utilities, you can create this jumbotron, just
                                like the one in previous versions of Bootstrap. Check out the
                                examples below for how you can remix and restyle it to your liking.
                            </p>
                            <button className="btn btn-primary btn-lg" type="button">
                                Example button
                            </button>
                        </div>
                    </div>

                </div>

                <section id="characters">
                    <div className="container">
                        <div className="row">
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <button className="page-link" onClick={fetchData} aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </button>
                                    </li>
                                    <li className={`page-item`} aria-current="page">
                                        <button className="page-link" value="1" onClick={fetchData} aria-label="1">
                                            <span aria-hidden="true">1</span>
                                        </button>
                                    </li>
                                    <li className="page-item">
                                        <button className="page-link" value="2" onClick={fetchData} aria-label="2">
                                            <span aria-hidden="true">2</span>
                                        </button>
                                    </li>
                                    <li className="page-item">
                                        <button className="page-link" onClick={fetchData} value="next" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="row">
                            {characters.map(character =>

                                <div className="col-12 col-sm-6 col-md-4 mb-4" key={character.id}>
                                    <div className={`card h-100  position-relative ${character.status === "Alive" ? "border-success bg-success-subtle" : "border-danger bg-danger-subtle"}`}>
                                        <img className='img-fluid' src={character.image} alt="" />
                                        <div className="card-body">
                                            <h3>{character.name}</h3>
                                            <span>Origin: {character.origin.name} </span>
                                            <div className="badge bg-primary position-absolute top-0 start-0">
                                                {character.species}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </section>
            </main >


        </>
    )
}