import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/card.module.css';


function GameCard(props) {

   // eslint-disable-next-line react/prop-types
   const {gameId, setGameId, coverUrl} = props;

   // maybe replace <button> with React Button for more custom options?

   const handleNavigate = () => {
      setGameId(gameId);
   }

   return (
    <>
      <button onClick={(() => handleNavigate())}>
         <div className={styles.card}>
            <div className={styles.card_cover_container}>
               <img className={styles.card_image} src={coverUrl}></img>
            </div>
         </div>
      </button>

    </>
   );
}

export default GameCard;