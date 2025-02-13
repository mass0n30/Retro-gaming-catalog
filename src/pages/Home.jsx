{/* import { useState, useEffect } from 'react' */}
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import queryForTop100GameData from "../api.js";
import GameCardBody from "./HomeBody";

import '../styles/App.css'

function Home() {
  const [games, setGames] = useState[null];

  const [year, setYear] = useState[1985];

  useEffect(() => {
    let ignore = false;
    queryForTop100GameData(year).then(data => {
      if(!(ignore)) {
        setGames(data);
      }
    });
    return () => {
      console.log("Cleanup");
      ignore = true;
    };
  }, [year]);

  return (
    <div>
    <h1>Hello from home page!</h1>
    <p>So, how are you?</p>
    <div>
      <GameCardBody games={games}/>
    </div>
    <hr />
    <div id='paginationContainer'>
      <Pagination count={10} shape="rounded" />
    </div>
  </div>
  )
}

export default Home;