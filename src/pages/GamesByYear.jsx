import { useLoaderData } from "react-router-dom";

import { useState } from "react";

import Pagination from '@mui/material/Pagination';

import GameCardBody from "../components/GamesBody";

import getPaginationCount from "../helpers";

import DisplayYears from "../components/Components";

function GamesByYear() {

  const gameData = useLoaderData();

  const pageCount = getPaginationCount(gameData.count);

  const [currentPage, setPage] = useState(1);

  const updatePageNumber = ( page) => {
    setPage(page);
    console.log(currentPage);
  }

  return (
    <>
      <DisplayYears/>
      <div>
        <GameCardBody games={gameData}/>
      </div>
      <hr />
      <div id='paginationContainer'>
        <Pagination count={pageCount} shape="rounded" onChange={(event, page) => updatePageNumber(page)}/>
      </div>
    </>
  )
}

export default GamesByYear;