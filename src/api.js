

//dealing with Promise object
export default async function queryForTop100GameData(gameyear) {
  try {
    const gameData = await retrieveYearData(gameyear);

    console.log(gameData);
    //displayGameData(gameData);
  } catch(error) {
    console.log(error);
  }

}



// return Promise object
export async function retrieveYearData(gameyear) {

  const platformIds = "49,79,83,105,27,15,80,167,106";

  const url = `https://api.rawg.io/api/games?key=8ec2b2ef012044dc8ae97ef6c28c4e62&dates=${gameyear}-01-01,${gameyear}-12-31&platforms=${platformIds}&ordering=-rating&page_size=20&page=4`;

  try {
      const data = await fetch(url, { mode: 'cors' });
      if (!data.ok) {
      throw new Error(`Response status: ${data.status}`);
      }
      const gameData = await data.json();
      console.log(gameData);
      return gameData;
  } catch (error) {
      console.log(error);
  }


}


