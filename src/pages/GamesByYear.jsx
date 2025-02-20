import { useOutletContext } from "react-router-dom";

import { useEffect, useState } from "react";

import Pagination from '@mui/material/Pagination';

import GameCardBody from "../components/GamesBody";

import getPaginationCount from "../helpers";

import  {DisplayYears} from "../components/Components";
import queryForGamesByYear from "../api";


function GamesByYear() {

  //clicking home or logo will bring us back to this index path to search by years

  const {games, handleSetGames, setDataHandler} = useOutletContext();

  const [currentPage, setPage] = useState(1);
  const [currentYear, setYear] = useState(1985);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    let ignore = false;
    queryForGamesByYear(currentYear,currentPage).then(data => {
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
  }, [currentYear,currentPage]);


  if (!(games)) {
    return ( <>Loading.....</>)
  }
    
    
  return (
    <>
      <DisplayYears updateYear={(setDataHandler,setYear)}/>
      <div>
        <GameCardBody games={games}/>
      </div>
      <hr />
      <div id='paginationContainer'>
        <Pagination count={pageCount} shape="rounded" onChange={(event, page) => setDataHandler(page,setPage)}/>
      </div>
    </>
  )

}

export default GamesByYear;