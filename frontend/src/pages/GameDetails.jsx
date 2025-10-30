import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import styles from '../styles/components/details.module.css';
import axios from "axios";
import normalizeGameData from '../helpers';


function GameDetails() {

   const {gameDetails} = useOutletContext();

   const game = normalizeGameData(gameDetails);

   console.log(game);

  if (game == undefined) {
   return (
      <>
      </>
   )
  }

  return (
    <div className="game-details">
      <div>{game.name}</div>
      <div>Developer:</div> {game.developer}

        <div className="cover-container">
         {game.coverUrl ? (
            <img src={game.coverUrl} className="cover" />
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