import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/components/details.module.css';
import axios from "axios";


function GameDetails() {

   const {gameId} = useParams();

   console.log(gameId);
   return (
    <>


    </>
   );
}

export default GameDetails;