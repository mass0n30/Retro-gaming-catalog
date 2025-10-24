const { Router } = require("express");
const gamesRouter = Router();
const { getGamesByYear, populateAllGames } = require("../middlewares/twitch");
const {handleGetAllData} = require('../controllers/viewController');


gamesRouter.get('/', handleGetAllData);



module.exports = {gamesRouter};
