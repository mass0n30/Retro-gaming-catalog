import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import {DisplayConsoles, DisplayYears } from "./components/Components";
function App() {

  const [games, setGames] = useState();

  const handleSetGames = (newGames) => {

    setGames(newGames);
  }



  return (
    <div>
      <Navbar />
      <DisplayConsoles/>
      <main>
        <Outlet context={{games,handleSetGames}}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
