import App from "./App"; 
import GamesByYear from "./pages/GamesByYear";
import GamesByConsole from "./pages/GamesByConsole";
import GameDetails from "./pages/GameDetails";
import ErrorPage from "./pages/ErrorPage";

const platformIds = "49,79,83,105,27,15,80,167,106";

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