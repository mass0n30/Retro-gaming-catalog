import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import {DisplayConsoles } from "./components/Components";
function App() {

  const [games, setGames] = useState();
  const [currentConsole, setConsole] = useState();

  const [currentPage, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const handleSetGames = (newGames) => {

    setGames(newGames);
  }

  const setDataHandler = (stateValue,setState) => {

    setState(stateValue)
  };


  return (
    <div>
      <Navbar />
      <DisplayConsoles setDataHandler={setDataHandler} setConsole={setConsole} />
      <main>
        <Outlet context={{games,handleSetGames,currentConsole,console,setDataHandler,setPageCount,setPage,currentPage,pageCount}}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
