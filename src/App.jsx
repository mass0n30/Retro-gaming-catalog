import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {DisplayConsoles, DisplayYears } from "./components/Components";
function App() {

  const [games, setGames] = useState();

  const handleSetGames = (newGames) => {

    setGames(newGames);
  }

  const setDataHandler = (stateValue,setState) => {

    setState(stateValue)
  };



  return (
    <div>
      <Navbar />
      <DisplayConsoles handleSetGames={handleSetGames}/>
      <main>
        <Outlet context={{games,handleSetGames,setDataHandler}}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
