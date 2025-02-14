{/* import { useState, useEffect } from 'react' */}
import { useParams, useLoaderData } from "react-router-dom";
import {useState, useEffect, useRef} from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import queryForTop100GameData from "../api.js";
import GameCardBody from "./HomeBody";

import '../styles/App.css'

function Home() {

  const top100GameData = useLoaderData();

 {
    return (
      <div>
      <h1>Hello from home page!</h1>
      <p>So, how are you?</p>
      <div>
        <GameCardBody games={top100GameData}/>
      </div>
      <hr />
      <div id='paginationContainer'>
        <Pagination count={10} shape="rounded" />
      </div>
    </div>
    )
  }
}

export default Home;