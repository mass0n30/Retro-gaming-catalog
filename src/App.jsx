import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {

  const [games, setGames] = useState();

  //setState data for route change kept here


  return (
    <div>
      <Navbar />
      <main>
        <Outlet context={[games,setGames]}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
