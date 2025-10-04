const { Router } = require("express");
const yearRouter = Router();
const { getGamesByYear } = require("../middlewares/twitch");

yearRouter.get("/", async (req, res, next) => {
    await getGamesByYear(req, res, next);
});


module.exports = {yearRouter};

