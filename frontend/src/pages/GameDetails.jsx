import { useEffect, useState } from 'react';
import styles from '../styles/components/details.module.css';
import axios from "axios";


function GameDetails() {

   useEffect(() => {
      axios
         .get(`http://localhost:5000/home/details/`)
   })

   console.log("game");
   return (
    <>


    </>
   );
}

export default GameDetails;