// viewController
const {prisma} = require("../db/prismaClient.js");


async function handleGetGames(req, res, next) {

  try {
    const { genre, platform, developer, year, search, offset, limit } = req.params;

    const games = await prisma.game.findMany({
      where: {
        genreId: genre|| undefined,
        platformId: platform || undefined,
        developerId: developer || undefined,
        year: year || undefined,
      },
      take: limit,
      skip: offset,
    });
    return games;
    
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