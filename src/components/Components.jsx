import { Link } from "react-router-dom";


const DisplayYears = ({updateYear}) => {

  let years = [];

  for (let i = 1985; i < 2007; i++) {
    years.push(i);
  }
  
 
  return (
    <div id='yearsBtnContainer'>
    {years.map((year) => {
      return <button onClick={() => updateYear(year)} className='yearsBtns' key={year}>{year}</button>;
    })}
    </div>
  )
}


const DisplayConsoles = (handleSetGames) => {

  const consoles = ["NES", "SNES", "N64", "GameCube", "PS1", "PS2", "Xbox", "Sega Genesis", "Sega Saturn", "DreamCast", "GameBoy", "GameBoy Color", "GameBoy Advance", "Nintendo DS", "PSP"];

  // const svgs = []; (map images from array in accordance)

  return (

    <div id="consoleBtnContainer">
      {consoles.map((console, index) => {
        return <div key={(console)}><Link to="console" key={(console)}>{consoles[index]}</Link></div>
      })}
    </div>
  );

}

export { DisplayYears, DisplayConsoles };
