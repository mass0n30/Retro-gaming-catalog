{/* import { useState, useEffect } from 'react' */}
import { useParams, useLoaderData } from "react-router-dom";

import Pagination from '@mui/material/Pagination';

import GameCardBody from "./HomeBody";

import getPaginationCount from "../helpers";

import DisplayYears from "../components/Components";

import '../styles/App.css'
import { useState } from "react";

function Home() {

  const gameData = useLoaderData();

  const pageCount = getPaginationCount(gameData.count);

  const [currentPage, setPage] = useState(1);


  const updatePageNumber = ( page) => {
    setPage(page);
    console.log(currentPage);
  }

 {
    return (
      <div>
      <h1>Hello from home page!</h1>
      <p>So, how are you?</p>
      <DisplayYears/>
      <div>
        <GameCardBody games={gameData}/>
      </div>
      <hr />
      <div id='paginationContainer'>
        <Pagination count={pageCount} shape="rounded" onChange={(event, page) => updatePageNumber(page)}/>
      </div>
    </div>
    )
  }
}

export default Home;