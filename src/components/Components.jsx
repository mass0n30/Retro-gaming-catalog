
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


const DisplayConsoles = () => {

  const consoles = ["NES", "SNES", "N64", "GameCube", "PS1", "PS2", "Xbox", "Sega Genesis", "Sega Saturn", "DreamCast"];

  // const svgs = []; (map images from array in accordance)

  return (

    <div id="consoleBtnContainer">
      {consoles.map((console, index) => {
        return <div key={(console)}>{consoles[index]}</div>
      })}
    </div>
  );

}

export { DisplayYears, DisplayConsoles };
