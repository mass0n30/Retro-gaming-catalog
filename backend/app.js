require('dotenv').config();
const express = require('express');
const expressSession = require("express-session");
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('./generated/prisma/client');
const passport = require("passport");
require("./config/passport"); // booting strategy before any initializing
const pgPool = require("./config/pool");
const cors = require('cors');


const {indexRouter} = require('./routes/index');
const {signupRouter} = require('./routes/signup');
const {homeRouter} = require('./routes/home');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    cookie: {
     maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
    secret: 'cats',
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(
      new PrismaClient(),
      {
        pool: pgPool,
        checkPeriod: 2 * 60 * 1000,  //ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }
    )
  })
);

app.use(passport.session());  //enables persistent login sessions

app.use('/', indexRouter);
app.use('/sign-up', signupRouter);

app.use('/home', homeRouter);

app.post("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return res.status(400);
    } 
    res.status(200).json({ message: "Logged out successfully" });
  });
});

let appAccessToken = null;
let tokenExpiry = 0;

async function getToken() {
  const now = Date.now();
  if (!appAccessToken || now >= tokenExpiry) {
    const params = new URLSearchParams({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: 'client_credentials'
    });

    const res = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });

    const data = await res.json();
    appAccessToken = data.access_token;
    tokenExpiry = now + data.expires_in * 1000;
  }
  return appAccessToken;
};

app.listen(5000, () => console.log('Server started on port 5000'));