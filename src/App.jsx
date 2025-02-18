import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [games, setGames] = useState();

  const handleSetGames = (newGames) => {

    setGames(newGames);
  }



  return (
    <div>
      <Navbar />
      <main>
        <Outlet context={{games,handleSetGames}}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
