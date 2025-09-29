const { Router } = require("express");
require('dotenv').config();
const indexRouter = Router();

indexRouter.get("/", async (req, res, next) => {
  res.json("home json log");
});

const {authenticateUser} = require('../config/passport');
const {validateUser} = require('../controllers/validation');

indexRouter.post("/", validateUser(), authenticateUser);

indexRouter.get('/auth/twitch', async (req, res, next) => {
  try {
    const params = new URLSearchParams({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: 'client_credentials'
    });

    const response = await fetch(`https://id.twitch.tv/oauth2/token?${params.toString()}`, {
      method: 'POST'
    });

    const data = await response.json();

    console.log(data, 'twitch');

    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = {indexRouter};

