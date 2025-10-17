import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CharacterCard from "../components/CharacterCard"

export default function CharacterPage() {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)

    const endpoint = `https://rickandmortyapi.com/api/character/${id}`


    useEffect(() => {
        fetchData(endpoint)
    }, [])


    function fetchData(endpoint) {
        axios.get(endpoint)
            .then(res => {
                console.log(res.data);
                setCharacter(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div>
            <div className="p-5 bg-light">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Discover The character</h1>
                        <p className="col-md-8 fs-4">
                            Here is your characters list
                        </p>
                    </div>
                </div>

            </div>

            {character != null ? <CharacterCard character={character} /> : <div> loading...</div>}
        </div>
    )
}