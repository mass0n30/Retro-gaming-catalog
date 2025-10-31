import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import styles from '../styles/components/details.module.css';
import axios from "axios";
import normalizeGameData from '../helpers';
import CustomSpinner from '../components/Spinner';


function GameDetails() {

   const {gameDetails, loading} = useOutletContext();

   const game = normalizeGameData(gameDetails);

   console.log(game);

  if (loading) {
   return (
      <CustomSpinner/>
   )
  }

  return (
    <div className="game-details">
      <div>{game.name}</div>
      <div>Developer:</div> {game.developer.name ? (
            game.developer.name
      ) : (
         <p>Unknown Developer</p>
      )}

        <div className="cover-container">
         {game.cover ? (
            <img src={game.cover} className="cover" />
         ) : (
            <p>No Cover Art</p>
         )}
        </div>

      <div className="screenshots">
        {game.screenshots.length > 0 ? (
          game.screenshots.map((ss) => (
            <img
              key={ss.id}
              src={`https:${ss.url}`} 
              alt={`${game.name} screenshot`}
              className="screenshot"
            />
          ))
        ) : (
          <p>No screenshots available.</p>
        )}
      </div>
    </div>
   );
}

export default GameDetails;