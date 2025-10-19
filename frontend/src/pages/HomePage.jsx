
import { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from '../components/GameCard';
import styles from '../styles/components/home.module.css';
import axios from "axios";

//import Loader from "./Loader";


function HomePage() {
    const { loading, success, SetLoading, SetSuccess, SetNewFetch, games, setGames } = useOutletContext();
    const token = localStorage.getItem('usertoken');

    // InfiniteScroll state var
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(2);

    useEffect(() => {
    axios
      .get("http://localhost:5000/home/games",{
      })
      .then((res) => setGames(res.data.games))
      .catch((err) => console.log(err));
  }, [token, setGames]);

    const fetchMoreData = () => {
    axios
      .get(`http://localhost:5000/home/games?offset=${index}0&limit=12`)
      .then((res) => {
        setGames((prevItems) => [...prevItems, ...res.data]);

        res.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);
  };

    if (loading  || !games ) {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <div className="spinner"></div>
        </div>
      </>
    );
  }


  return (
    <>
    <InfiniteScroll
      dataLength={games.length}
      next={fetchMoreData}
      hasMore={hasMore}
     // loader={<Loader />}
      >
      <section>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
      </section>
    </InfiniteScroll>
    </>
  )
}

export default HomePage;