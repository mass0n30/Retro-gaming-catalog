const { Router } = require("express");
const platformRouter = Router();
const { getGamesByPlatform } = require("../middlewares/twitch");

platformRouter.get("/", async (req, res, next) => {
    await getGamesByPlatform(req, res, next);
});


module.exports = {platformRouter};