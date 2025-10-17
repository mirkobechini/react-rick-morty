import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
import axios from "axios";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";



function App() {


  const [characters, setCharacters] = useState([])

  function fetchData(e) {
    console.log('fetch data');
    //fetch data with axios
    axios.get(`https://rickandmortyapi.com/api/character?page=${e.target.value}`)
      .then(res => {
        const { info, results } = res.data

        setCharacters(results)

      })
      .catch(err => {
        console.error(err.message);
      }
      )
    //log fetched data
  }




  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout  fetchData = {fetchData}/>}>
          <Route index element={<HomePage fetchData = {fetchData} characters = {characters} setCharacters= {setCharacters}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
