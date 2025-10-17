export default function AppHeader({fetchData}){
    return(
        <header>
             <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <strong>Rick e Morty</strong>
          </div>
          <button className='btn btn-dark' value="1" onClick={fetchData}>
            <i className="bi bi-download"></i> Fetch data
          </button>
        </div>
        </header>
    )
}