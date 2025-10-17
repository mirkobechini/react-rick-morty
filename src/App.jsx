import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import CharacterPage from "./pages/CharacterPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";

import menu from "./data/menu"



function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout menu = {menu} />}>
          <Route index element={<HomePage/>} />
          <Route path="/characters" element={<CharactersPage/>} />
          <Route path="/characters/:id" element={<CharacterPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contacts" element={<ContactsPage/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
