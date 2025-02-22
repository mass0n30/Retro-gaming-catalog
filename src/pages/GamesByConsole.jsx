import Pagination from '@mui/material/Pagination';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { queryForGamesByConsole } from '../api';
import getPaginationCount from '../helpers';
import GameCardBody from '../components/GamesBody';


// eslint-disable-next-line react/prop-types
function GamesByConsole() {

  const {games,currentConsole,handleSetGames,setDataHandler,setPage,setPageCount,currentPage,pageCount} = useOutletContext();

  useEffect(() => {
    let ignore = false;
    queryForGamesByConsole(currentConsole,currentPage).then(data => {
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
  }, [currentConsole,currentPage]);

  return (
    <>
      <div>Games Console</div>
      <GameCardBody games={games} />
      <div id='paginationContainer'>
        <Pagination count={pageCount} shape="rounded" onChange={(event, page) => setDataHandler(page,setPage)}/>
      </div>
    </>
  )
}


export default GamesByConsole