const { Router } = require("express");
const yearRouter = Router();
const { getGamesByYear, populateAllGames } = require("../middlewares/twitch");

yearRouter.get("/", async (req, res, next) => {
    await populateAllGames(req, res, next);
});


module.exports = {yearRouter};

