import { useEffect, useState } from 'react';
import styles from '../styles/components/nav.module.css';



// eslint-disable-next-line react/prop-types
function Navbar({ toggle, setToggle }) {

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.toggleContainer}>
        <button onClick={() => handleToggle()}>
          <img
            src={toggle ? '/icons/close.png' : '/icons/menu.png'}
            alt="toggle sidebar"
          />
        </button>
      </div>

      <div className={styles.logoContainer}>
        Retro Games Placeholder
      </div>

      <div className={styles.searchBarContainer}>
      </div>
    </nav>
  );
}


export default Navbar;