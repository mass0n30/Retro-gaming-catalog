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
const DisplayConsoles = ({ setDataHandler,setConsole}) => {

  const consoles = ["NES", "SNES", "N64", "GameCube", "PS1", "PS2", "Xbox", "Sega Genesis", "Sega Saturn", "DreamCast", "GameBoy", "GameBoy Color", "GameBoy Advance", "Nintendo DS", "PSP"];

  // const svgs = []; (map images from array in accordance)


  return (
    <>
      <div id="consoleBtnContainer">
        {consoles.map((console, index) => {
          return <button onClick={() => setDataHandler(console,setConsole)} key={(console)}><Link to="console" key={(console)}>{consoles[index]}</Link></button>
        })}
      </div>
    </>

  );

}

export { DisplayYears, DisplayConsoles };
