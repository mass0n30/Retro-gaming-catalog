import { useEffect, useState } from 'react';
import styles from '../styles/components/card.module.css';


function GameCard(game) {

   console.log(game);
   return (
    <>
      <div className={styles.card}>
         <div className={styles.card_cover_container}>
            <img className={styles.card_image} src={game.game.coverUrl}></img>
         </div>
      </div>

    </>
   );
}

export default GameCard;