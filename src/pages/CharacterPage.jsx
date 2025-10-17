import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CharacterCard from "../components/CharacterCard"

import { Cardio } from 'ldrs/react'

export default function CharacterPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [character, setCharacter] = useState(null)

    const endpoint = `https://rickandmortyapi.com/api/character/${id}`


    useEffect(() => {
        setTimeout(() => {
            fetchData(endpoint)
        }, 2000)
    }, [id])


    function fetchData(endpoint) {
        axios.get(endpoint)
            .then(res => {
                console.log(res.data);
                setCharacter(res.data)
            })
            .catch(err => {
                console.error(err);
                navigate(-1)
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

            {character != null ?
                <CharacterCard character={character} />
                :
                <div className="vh-100 text-center">
                    <Cardio
                        size="50"
                        stroke="4"
                        Speed="2"
                        color="black"
                    />
                    <div>Loading...</div>
                </div>
            }
        </div>
    )
}