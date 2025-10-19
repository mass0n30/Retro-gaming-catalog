const { Router } = require("express");
const gameDetailsRouter = Router();
const { getGamesByYear, populateAllGames } = require("../middlewares/twitch");
const {handleGetGameDetails} = require('../controllers/viewController');

gameDetailsRouter.get('/:gameid', async (req, res, next) => {

 const gameDetails = await handleGetGameDetails(req, res, next);

  res.json({
    game: gameDetails
  })
});




module.exports = {gameDetailsRouter};
