import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import {DisplayConsoles } from "./components/Components";
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
      <DisplayConsoles handleSetGames={handleSetGames} setDataHandler={setDataHandler}/>
      <main>
        <Outlet context={{games,handleSetGames,setDataHandler}}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
