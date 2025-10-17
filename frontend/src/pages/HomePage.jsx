
import { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import GameCard from '../components/GameCard';
import styles from '../styles/components/home.module.css';

function HomePage() {
  const { loadingData, appData } = useOutletContext();

  console.log(appData);


  return (
    <>
      <div>Welcome home, <i>{appData.alias}</i> </div>
    </>
  )
}

export default HomePage;