import { useOutletContext } from "react-router-dom";

import { useEffect, useState } from "react";

import Pagination from '@mui/material/Pagination';

import GameCardBody from "../components/GamesBody";

import getPaginationCount from "../helpers";

import  {DisplayYears} from "../components/Components";
import queryForGamesByYear from "../api";


function GamesByYear() {

  //clicking home or logo will bring us back to this index path to search by years

  const {games,handleSetGames,setDataHandler,setPageCount,setPage,currentPage,pageCount} = useOutletContext();

  const [currentYear, setYear] = useState(1985);

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
      <DisplayYears setDataHandler={setDataHandler} setYear={setYear}/>
      <GameCardBody games={games}/>
      <div id='paginationContainer'>
        <Pagination count={pageCount} shape="rounded" onChange={(event, page) => setDataHandler(page,setPage)}/>
      </div>
    </>
  )

}

export default GamesByYear;