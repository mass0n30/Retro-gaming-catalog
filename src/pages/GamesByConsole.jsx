import Pagination from '@mui/material/Pagination';
import { useOutletContext } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function GamesByConsole() {

  const {setDataHandler,setPage,pageCount} = useOutletContext();

  return (
    <>
      <div>Games Console</div>
      <div id='paginationContainer'>
        <Pagination count={pageCount} shape="rounded" onChange={(event, page) => setDataHandler(page,setPage)}/>
      </div>
    </>
  )
}


export default GamesByConsole