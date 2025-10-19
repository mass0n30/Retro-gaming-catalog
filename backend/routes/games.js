const { Router } = require("express");
const gamesRouter = Router();
const { getGamesByYear, populateAllGames } = require("../middlewares/twitch");
const {handleGetGames} = require('../controllers/viewController');

gamesRouter.get('/', async (req, res, next) => {

  const games = await handleGetGames(req, res, next);

  res.json({
    games: games
  })
});

gamesRouter.get('/genre/:genreid', async (req, res, next) => {

  const games = await handleGetGames(req, res, next);

  res.json({
    games: games
  })
});

gamesRouter.get('/platform/:platformid', async (req, res, next) => {

  const games = await handleGetGames(req, res, next);

  res.json({
    games: games
  })
});

gamesRouter.get('/developer/:developerid', async (req, res, next) => {

  const games = await handleGetGames(req, res, next);

  res.json({
    games: games
  })
});








module.exports = {gamesRouter};
