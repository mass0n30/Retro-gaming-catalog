import App from "./App"; 
import Home from "./pages/Home"; 
import ErrorPage from "./components/ErrorPage";
import queryForTop100GameData from "./api";

const platformIds = "49,79,83,105,27,15,80,167,106";

const routes = [

  {
    path: "/", 
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // default render
        element: <Home />,
        loader: async ({ params }) => {
          return fetch(`https://api.rawg.io/api/games?key=8ec2b2ef012044dc8ae97ef6c28c4e62&dates=1985-01-01,1985-12-31&platforms=${platformIds}&ordering=-rating&page_size=20&page=1`);
        }
      },

    ]
  },

];

export default routes;