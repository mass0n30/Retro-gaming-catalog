const { Router } = require("express");
const homeRouter = Router();
var jwt = require('jsonwebtoken');
const jwtDecode = require("jwt-decode");
const passport = require('passport');
const { getData } = require('../controllers/viewController');
require('../config/passport');

homeRouter.get('/', passport.authenticate('jwt', { session: false }), async (req, res, next ) => {

//  const data = await getAllUserData(req, res, next);

  // req.user from passport callback authentication
  res.json({
    user: {
      alias: req.user.alias,
      first: req.user.fname,
      last: req.user.lname,
      admin: req.user.is_admin
    },
   // data: orderedData
  });
});


const { getToken } = require('../twitch');

// test consoles
homeRouter.get('/consoles', async (req, res, next) => {
const token = await getToken();
const response = await fetch('https://api.igdb.com/v4/platforms', {
  method: 'POST',
  headers: {
    'Client-ID': process.env.TWITCH_CLIENT_ID,
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'text/plain'
  },
  body: 'fields id,name,abbreviation; limit 50;'
});
const platforms = await response.json();
console.log(platforms);
res.json(platforms);
});




module.exports = {homeRouter}