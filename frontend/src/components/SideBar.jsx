import { useEffect, useState } from 'react';
import ListBoxSelection from './ListBox';
import styles from '../styles/components/sidebar.module.css';


function SideBar(platform, genre, console, developer, year, setPlatform, setGenre, setConsole, setDeveloper, setYear, 
  platformData, genreData, developerData, yearData
) {

  return (
    <>
      <div>
        <ListBoxSelection
          datatype="Platform"
          data={platformData}
          keys={platform}
          setKeys={setPlatform}
        />
      </div>

      <div>
        <ListBoxSelection
          datatype="Genre"
          data={genreData}
          keys={genre}
          setKeys={setGenre}
        />
      </div>

      <div>
        <ListBoxSelection
          datatype="Console"
          data={console}
          keys={console}
          setKeys={setConsole}
        />
      </div>

      <div>
        <ListBoxSelection
          datatype="Developer"
          data={developerData}
          keys={developer}
          setKeys={setDeveloper}
        />
      </div>

      <div>
        <ListBoxSelection
          datatype="Year"
          data={yearData}
          keys={year}
          setKeys={setYear}
        />
      </div>
    </>
  )
};

export default SideBar;