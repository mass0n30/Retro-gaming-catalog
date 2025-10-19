// viewController
const {prisma} = require("../db/prismaClient.js");


async function handleGetGames(req, res, next) {

  try {

    const games = await prisma.game.findMany({
      take: 100
    });
    return games;
    
  } catch (error) {
    next(error)
  }


}

module.exports = {handleGetGames};