import { useLoaderData, useOutletContext } from "react-router-dom";

import { useContext, useEffect, useState } from "react";

import Pagination from '@mui/material/Pagination';

import GameCardBody from "../components/GamesBody";

import getPaginationCount from "../helpers";

import DisplayYears from "../components/Components";

function GamesByYear() {

  const [games, setGames] = useOutletContext();

  const [currentPage, setPage] = useState(1);

  const [currentYear, setYear] = useState(1985);

  const gameData = useLoaderData();

  const pageCount = getPaginationCount(gameData.count);

  const updatePageNumber = (page) => {
    setPage(page);
    console.log(currentPage);
  }

  const updateYear = (year) => {
    setYear(year);
    console.log(year);
  }

  useEffect(() => {


  },[currentYear])


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