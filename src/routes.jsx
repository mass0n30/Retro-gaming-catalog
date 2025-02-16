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
        loader: async ({ params }) => {
          return fetch(`https://api.rawg.io/api/games?key=8ec2b2ef012044dc8ae97ef6c28c4e62&dates=2002-01-01,2002-12-31&platforms=${platformIds}&ordering=-rating&page_size=20&page=1`);
        }
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