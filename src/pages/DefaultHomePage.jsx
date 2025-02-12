
{/* import { useState, useEffect } from 'react' */}
{/*maybe import local styles */}

import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function DefaultHomePage() {

  return (
    <>
      <div>Default Home</div>
      <div>
        <Link to="pageone">
            <div>go to page one</div>
        </Link>
      </div>
      <div>
        <Link to="pagetwo">
            <div>go to page two</div>
        </Link>
      </div>
      <div id='paginationContainer'>
        <Pagination count={10} shape="rounded" />
      </div>
    </>
  )
}

export default DefaultHomePage;