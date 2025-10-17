export default function CharacterCard({character}){
    return(
        <div className="card col-4 mx-auto p-3 text-center justify-content-center align-items-center">
            <img className="img-fluid rounded-circle" width={200} src={character.image} alt= {character.name} />
            <h3> {character.name} </h3> 
            <div> Specie: {character.species} </div>
            <div> Gender: {character.gender} </div>
            <div> Status: {character.status} </div>
        </div>
    )
}