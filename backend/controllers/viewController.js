// viewController
const {prisma} = require("../db/prismaClient.js");


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
    return res.json({games});
    
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


module.exports = {handleGetGames, handleGetGameDetails};