// viewController
const {prisma} = require("../db/prismaClient.js");

async function handleGetAllData(req, res, next) {

  try {

    const categoryData = await getAllCategoryData(req, res, next);
    const gamesData = await handleGetGames(req, res, next);

    return res.json({categoryData, gamesData});
    
  } catch (error) {
    next(error);
  }
  
}

async function getAllCategoryData(req, res, next) {

  try {
    const platforms = await prisma.platform.findMany();
    const years = [
      1985, 1986, 1987, 1988, 1989,
      1990, 1991, 1992, 1993, 1994,
      1995, 1996, 1997, 1998, 1999,
      2000, 2001, 2002, 2003, 2004,
      2005, 2006
    ];
    const genres = await prisma.genre.findMany();
    const developers = await prisma.developers.findMany();

    return ({platforms, years, genres, developers})
  } catch (error) {
    next(error);
  }

};


async function handleGetGames(req, res, next) {

  console.log(req.query, 'query');

  try {
    const { genre, platform, developer, year, search, offset, limit } = req.query;

    const games = await prisma.game.findMany({
      where: {
        genres: genre != "undefined" ? { some: genre } : undefined,
        platforms: platform != "undefined" ? { some: platform } : undefined,
        developerId: developer != "undefined" ? developer : undefined,
        year: year != "undefined" ? year : undefined,
      },
      take: parseInt(limit),
      skip: parseInt(offset),
    });
    return (games);
    
  } catch (error) {
    next(error)
  }
};

async function handleGetGameDetails(req, res, next) {

  const gameId = req.params.gameid;

  try {

    const gameDetails = await prisma.game.findUnique({
      where: {
        id: gameId
      }
    });
    return gameDetails;
    
  } catch (error) {
    next(error)
  }
};


module.exports = {handleGetGames, handleGetGameDetails, getAllCategoryData, handleGetAllData};