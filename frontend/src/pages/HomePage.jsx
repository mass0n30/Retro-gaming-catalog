
import { useEffect, useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from '../components/GameCard';
import styles from '../styles/components/home.module.css';
import axios from "axios";

//import Loader from "./Loader";


function HomePage() {
    const { loading, success, SetLoading, SetSuccess, SetNewFetch, games, 
    setGames, gameDetails, setGameDetails, setCategoryData, search, setSearch, genre, platform, developer, year} = useOutletContext();
    const token = localStorage.getItem('usertoken');

    // InfiniteScroll state var
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(1);

    // temporary
    const offset = 1500;
    const limit = 100;

    // making search params obj
    const query = new URLSearchParams({
      genre: genre,
      platform: platform,
      developer: developer,
      year: year,
      search: search,
      offset: String(offset),
      limit: String(limit)
    }).toString();


  // initial mount for inital games (maybe save state scroll location?)
  useEffect(() => {
    axios
      .get(`http://localhost:5000/home/games?${query}`,{
      })
      .then((res) => setGames(res.data.games)) 
      .catch((err) => console.log(err));
  }, [token, setGames, query]);

  // fetch more logic for Infinite Scroll
  const fetchMoreData = () => {
    axios
      .get(`http://localhost:5000/home/games?offset=${index}0&limit=100`)
      .then((res) => {
        console.log(res, 'response');
        setGames((prevItems) => [...prevItems, ...res.data.games]);

        res.data.games.length > 0 ? setHasMore(true) : setHasMore(false);
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
  )
}

export default HomePage;