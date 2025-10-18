{/* import { useState, useEffect } from 'react' */}
import { useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

function Home() {

  // state data
  const [user, SetUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState(null);
  const [games, setGames] = useState(null);


  // loading state settings
  const [fetched, SetNewFetch] = useState(false);
  const [loading, SetLoading] = useState(true);
  const [success, SetSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [toggle, setToggle] = useState(false);

  const token = localStorage.getItem('usertoken');

  //spinner upon mount with delay, post creation message with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      SetLoading(false);
    }, 2000);

    const successTimer = setTimeout(() => {
      SetSuccess(false);
    }, 5000);
    return () => clearTimeout(timer, successTimer); 
  } ,[loading, SetSuccess, SetLoading]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/home', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', 
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        
        SetUser(result.user); // (only non sensitive user data from backend)
        // SetData(result.posts);
        // reset boolean fetch after updated posts fetch
        SetNewFetch(false);
      } catch (error) {
        setError(error);
      } 
    };
    fetchUser();
  }, [token, fetched]);  // token dependency?

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  if (loading  || !user) {
    return (
      <>
      <Navbar toggle={toggle} setToggle={setToggle}/>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <div className="spinner"></div>
        </div>
      <Footer/>
      </>
    );
  }

  return (
    <>
    <Navbar toggle={toggle} setToggle={setToggle}/>
    <main>
    <aside
      style={{
        transform: toggle ? 'translateX(0)' : 'translateX(-100%)',
        width: toggle ? '30rem' : '0rem',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        }}>
        <SideBar />
      </aside>
      <section>
        <Outlet context={{loadingData:loading, success, SetLoading, SetSuccess, SetNewFetch, appData: user, games, setGames }} />
      </section>
    </main>
    </>


  )
}

export default Home;