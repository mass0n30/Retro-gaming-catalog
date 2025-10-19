const { Router } = require("express");
const gamesRouter = Router();
const { getGamesByYear, populateAllGames } = require("../middlewares/twitch");
const {handleGetGames} = require('../controllers/viewController');


gamesRouter.get('/', handleGetGames);



module.exports = {gamesRouter};
