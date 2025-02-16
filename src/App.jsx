import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {

  //setState data for route change kept here


  return (
    <div>
      <Navbar />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
