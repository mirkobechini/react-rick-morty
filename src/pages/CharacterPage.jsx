import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CharacterCard from "../components/CharacterCard"

export default function CharacterPage(){
    const {id} = useParams()
    const [character, setCharacter] = useState(null)

    const endpoint = `https://rickandmortyapi.com/api/character/${id}`
    

    useEffect(() =>{
        fetchData(endpoint)
    }, [])


    function fetchData(endpoint){
        axios.get(endpoint)
        .then(res=> {       
            console.log(res.data);
            setCharacter(res.data)
        })
        .catch(err =>{
            console.error(err);
        })
    }

    return(
        <div>
            {character != null ? <CharacterCard character = {character} /> : <div> loading...</div>}
        </div>
    )
}