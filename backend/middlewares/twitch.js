let authenticationToken = null;

const apicalypse = require('apicalypse').default;


async function getTwitchToken() {
  if (authenticationToken) {
    return authenticationToken;
  } else {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;

  const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`, {
    method: 'POST'
  });

  if (!response.ok) {
    throw new Error('Failed to get Twitch token');
  }

  const data = await response.json();
  authenticationToken = data.access_token;
  return data.access_token;
  }
};

async function requestOptions() {
  const token = await getTwitchToken();
  return {
    queryMethod: 'body', 
    method: 'post',
    baseURL: 'https://api.igdb.com/v4',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.CLIENT_ID,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'text/plain'
    },
  };
};


async function getGamesByYear(req, res, next) { 
  try {   
    const options = await requestOptions();
    const year = 1985; 

    // setting pagination variables
    const page =  1 //  parseInt(req.query.page) || 1;

    // items per page
    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    const results = await apicalypse(options)
    .fields(`
      name,
      slug,
      summary,
      storyline,
      first_release_date,
      genres,
      platforms,
      cover,
      screenshots,
      rating,
      aggregated_rating,
      total_rating,
      total_rating_count,
      involved_companies,
      player_perspectives,
      url
    `) 
    .where(`first_release_date >= ${new Date(year, 0).getTime() / 1000} & first_release_date < ${new Date(year + 1, 0).getTime() / 1000} & total_rating > 70 & total_rating_count > 20;`)
    .sort('total_rating desc')
    .limit(pageSize)
    .offset(offset)

    .request('/games'); 

    const games = results.data;
    await saveGames(games);  

  } catch (error) {
     next(error);
  }
};

async function getGamesByPlatform(req, res, next) { 
  try {   
  
    // setting pagination variables
    const page =  1// parseInt(req.query.page) || 1;

    // items per page
    const pageSize = 20;
    const offset = (page - 1) * pageSize;
    const options = await requestOptions();
    const platformId = 4; 
    const games = await apicalypse(options)
    .fields(`
      name,
      slug,
      summary,
      storyline,
      first_release_date,
      genres,
      platforms,
      cover,
      screenshots,
      rating,
      aggregated_rating,
      total_rating,
      total_rating_count,
      involved_companies,
      player_perspectives,
      url
    `)    
    .where(`platforms = ${platformId} & total_rating_count > 10;`)
    .limit(pageSize)
    .offset(offset)
    .sort('total_rating desc')

    .request('/games'); 
    } catch (error) {
    next(error);
  }
};   

async function saveGame(gameData) {

  console.log(gameData, "game data to save");
  await prisma.game.upsert({
    where: { id: gameData.id },
    create: gameData,
    update: gameData,
  });
};

const { prisma } = require("../db/prismaClient.js");


async function saveGames(games) {
  for (const game of games) {
    const gameData = await mapGameData(game);
    await saveGame(gameData);
  }
};


async function getCover(game, options) {

  console.log(game , "game in get cover");

    if (game.cover) {
      const response = await apicalypse(options)
      .fields('url, game, image_id')  // image_id is used to coonstruct image URL 'fast responses'
      .where(`game = ${game.id};`)
      .request('/covers');

      const coverResponse = response.data[0];
      console.log(coverResponse, "cover response");

      if (coverResponse) {
        return coverResponse;
      } else {
        return null;
      }
    }
    return null;
  };

const { handleCreateCover } = require('../controllers/dataController/createController');

async function mapGameData(game) {

  const options = await requestOptions();

  const gameCover = await getCover(game, options);

  console.log(gameCover, "game cover");

  await handleCreateCover(gameCover, game);

  return {
    id: game.id,
    name: game.name,
    slug: game.slug,
    summary: game.summary || null,
    firstReleaseDate: game.first_release_date
      ? new Date(game.first_release_date * 1000) 
      : null,
    coverUrl: `https://images.igdb.com/igdb/image/upload/t_cover_big/${gameCover.image_id}.jpg` || null,
    screenshots: game.screenshots || null,
    genres: game.genres,
    platforms: game.platforms,
    rating: game.rating || null,
    aggregatedRating: game.aggregated_rating || null,
    totalRatingCount: game.total_rating_count || null,
    url: game.url || null,
  };
};



module.exports = { getGamesByYear, getGamesByPlatform };