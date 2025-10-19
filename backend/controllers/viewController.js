// viewController
const {prisma} = require("../db/prismaClient.js");


async function handleGetGames(req, res, next) {

  const limit = req.query.limit;
  const offset = limit * req.query.offset;

  try {

    const games = await prisma.game.findMany({
      skip: offset,
      take: parseInt(limit)
    });
    return games;
    
  } catch (error) {
    next(error)
  }
};

module.exports = {handleGetGames};