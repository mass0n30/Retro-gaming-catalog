// viewController
const {prisma} = require("../db/prismaClient.js");


async function handleGetGames(req, res, next) {

  try {
    const { genreid, platformid, developerid } = req.params;
    const { offset = 0, limit = 100 } = req.query;

    let games = null;

    if (genreid) {
       games = await prisma.game.findMany({
          where: {genreId: genreid},
          skip: parseInt(offset),
          take: parseInt(limit)
      });
    } else if (platformid) {
       games = await prisma.game.findMany({
          where: {genreId: genreid},
          skip: parseInt(offset),
          take: parseInt(limit)
      });
    } else if (developerid) {
       games = await prisma.game.findMany({
          where: {genreId: genreid},
          skip: parseInt(offset),
          take: parseInt(limit)
      });      
    } else {
       games = await prisma.game.findMany({
          skip:parseInt(offset),
          take: parseInt(limit)
      }); 
    }
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