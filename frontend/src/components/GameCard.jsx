import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/components/card.module.css';


function GameCard(game) {


  const navigate = useNavigate();
  // game details handler

   return (
    <>
    <button onClick={() => navigate(`/home/details/${game.game.id}`)}>
      <div className={styles.card}>
         <div className={styles.card_cover_container}>
            <img className={styles.card_image} src={game.game.coverUrl}></img>
         </div>
      </div>
    </button>
    </>
   );
}

export default GameCard;