
function DisplayYears() {

  let years = [];

  for (let i = 1985; i < 2007; i++) {
    years.push(i);
  }
  
 {
  return (
    <div id='yearsBtnContainer'>
    {years.map((year) => {
      return <button className='yearsBtns' key={year}>{year}</button>;
    })};
    </div>
  )
 }
}

export default DisplayYears