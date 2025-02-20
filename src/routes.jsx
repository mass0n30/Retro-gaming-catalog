import App from "./App"; 
import GamesByYear from "./pages/GamesByYear";
import GamesByConsole from "./pages/GamesByConsole";
import GameDetails from "./pages/GameDetails";
import ErrorPage from "./pages/ErrorPage";


const routes = [

  {
    path: "/", 
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <GamesByYear/>,

      },
      {
        path: "console",
        element: <GamesByConsole />
      },
      {
        path : "details",
        element: <GameDetails />
      }
  
    ]
  },

];

export default routes;