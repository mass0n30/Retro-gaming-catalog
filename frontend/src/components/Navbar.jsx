import { useEffect, useState } from 'react';
import styles from '../styles/components/nav.module.css';
import { useDebounce } from '../helpers';
import { Link } from 'react-router-dom';



// eslint-disable-next-line react/prop-types
export default function Navbar({ toggle, setToggle, setSearch, search }) {

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  }


  return (
    <nav className={styles.nav}>
      <div className={styles.navLeftContainer}>
        <div className={styles.toggleContainer}>
            <button onClick={() => handleToggle()}>
              <img
                src={toggle ? '/icons/close.png' : '/icons/menu.png'}
                alt="toggle sidebar"
              />
            </button>
          </div>
        <Link to={'/home'}>
          <div className={styles.logoContainer}>
            Retro Games Placeholder
          </div>
        </Link>

      </div>
 

    <div className={styles.searchBarContainer}>
      <input 
        type="text" 
        placeholder="Search games..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        className={styles.searchInput}
        />
      <button className={styles.searchButton}>
        <img src="/icons/search.png" alt="search" />
      </button>
    </div>

    </nav>
  );
}


