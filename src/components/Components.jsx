import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { queryForGamesByConsole } from "../api";
import GamesByConsole from "../pages/GamesByConsole";
import getPaginationCount from "../helpers";
import { Pagination } from "@mui/material";


// eslint-disable-next-line react/prop-types
const DisplayYears = ({setDataHandler,setYear}) => {

  let years = [];

  for (let i = 1985; i < 2007; i++) {
    years.push(i);
  }
  
 
  return (
    <>
      <div id='yearsBtnContainer'>
      {years.map((year) => {
        return <button onClick={() => setDataHandler(year,setYear)} className='yearsBtns' key={year}>{year}</button>;
      })}
      </div>

    </>
  )
}


// eslint-disable-next-line react/prop-types
const DisplayConsoles = ({handleSetGames, setDataHandler,pageInfo}) => {

  const consoles = ["NES", "SNES", "N64", "GameCube", "PS1", "PS2", "Xbox", "Sega Genesis", "Sega Saturn", "DreamCast", "GameBoy", "GameBoy Color", "GameBoy Advance", "Nintendo DS", "PSP"];

  // eslint-disable-next-line react/prop-types
  const { setPage, setPageCount, currentPage, pageCount } = pageInfo;

  // const svgs = []; (map images from array in accordance)
  const [currentConsole, setConsole] = useState();

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
      <div id="consoleBtnContainer">
        {consoles.map((console, index) => {
          return <button onClick={() => setDataHandler(console,setConsole)} key={(console)}><Link to="console" key={(console)}>{consoles[index]}</Link></button>
        })}
      </div>
      <GamesByConsole pageCount={pageCount} setDataHandler={setDataHandler} setPage={setPage}/>
    </>

  );

}

export { DisplayYears, DisplayConsoles };
