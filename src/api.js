

const platformIds = {
  NES: "49",
  SNES: "79",
  N64: "83",
  GameCube: "105",
  GameBoy: "26",
  "GameBoy Color": "43",
  "GameBoy Advance": "24",
  "Nintendo DS": "9",
  PS1: "27",
  PS2: "15",
  PSP: "17",
  Xbox: "80",
  "Sega Genesis": "167",
  DreamCast: "106",
  "Sega Saturn": "107",
};

//dealing with Promise object
export default async function queryForGamesByYear(gameyear,page) {
  try {
    const gameData = await retrieveYearData(gameyear,page);
    return gameData;
    //displayGameData(gameData);
  } catch(error) {
    console.log(error);
  }
};

export async function queryForGamesByConsole(consoleName,page) {
  try {
    const gameData = await retrieveConsoleData(consoleName,page);
    return gameData;
    //displayGameData(gameData);
  } catch(error) {
    console.log(error);
  }
};

// return Promise object
export async function retrieveYearData(gameyear,page) {
  const platformIds = "49,79,83,105,27,15,80,167,106,4,41,24,159,38"; 
  const url = `https://api.rawg.io/api/games?key=8ec2b2ef012044dc8ae97ef6c28c4e62&dates=${gameyear}-01-01,${gameyear}-12-31&platforms=${platformIds}&ordering=-rating&page_size=25&page=${page}`;
  
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

export async function retrieveConsoleData(consoleName, page) {

  const platformId = platformIds[consoleName];

  const url = `https://api.rawg.io/api/games?key=8ec2b2ef012044dc8ae97ef6c28c4e62&platforms=${platformId}&ordering=-rating&page_size=25&page=${page}`;
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
};
