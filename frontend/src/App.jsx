import { Outlet, ScrollRestoration } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {
  return (
    <>
      <ScrollRestoration/>
      <Outlet />
      <SpeedInsights />
    </>

  );
}

export default App;
