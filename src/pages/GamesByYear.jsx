import { useOutletContext } from "react-router-dom";

import { useEffect, useState } from "react";

import Pagination from '@mui/material/Pagination';

import GameCardBody from "../components/GamesBody";

import getPaginationCount from "../helpers";

import  {DisplayYears} from "../components/Components";
import queryForGamesByYear from "../api";


function GamesByYear() {

  const {games, handleSetGames} = useOutletContext();

  const [currentPage, setPage] = useState(1);
  const [currentYear, setYear] = useState(2006);
  const [pageCount, setPageCount] = useState(1);


  const updatePageNumber = (page) => {
    setPage(page);
    console.log(currentPage);
  }

  const updateYear = (year) => {
    setYear(year);
    setPage(1);
    console.log(year);
  }

  useEffect(() => {
    let ignore = false;
    queryForGamesByYear(currentYear).then(data => {
      if(!(ignore)) {
        console.log(data);
        handleSetGames(data);     
        const pageCount = getPaginationCount(data.count);
        setPageCount(pageCount); 
      }
    });
    return () => {
      console.log("Cleanup");
      ignore = true;
    };
  }, [currentYear]);


  if (!(games)) {
    return ( <>Loading.....</>)
  }
    
    
  return (
    <>
      <DisplayYears updateYear={updateYear}/>
      <div>
        <GameCardBody games={games}/>
      </div>
      <hr />
      <div id='paginationContainer'>
        <Pagination count={pageCount} shape="rounded" onChange={(event, page) => updatePageNumber(page)}/>
      </div>
    </>
  )

}

export default GamesByYear;