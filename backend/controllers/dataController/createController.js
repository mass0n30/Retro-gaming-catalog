// create controller 
const { prisma } = require("../../db/prismaClient.js");
const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");


async function handleCreateUser(req, res, next) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    await prisma.user.create({
      data: {
        email: req.body.username,
        fname: req.body.firstname,
        lname: req.body.lastname,
        alias: req.body.alias,
        password: hashedPassword,
      }
   });
  return res.status(201).json({ message: "Account Created Successfully" });
  } catch (error) {
    console.log('failed to create user');
    return res.status(400).json({ errors:error });
  }
};

async function saveGames(games) {
  for (const game of games) {
    const gameData = mapGameData(game);
    await saveGame(gameData);
  }
};

async function saveGame(gameData) {
  await prisma.game.upsert({
    where: { id: gameData.id },
    create: gameData,
    update: gameData,
  });
};


function mapGameData(game) {
  return {
    id: game.id,
    name: game.name,
    slug: game.slug,
    summary: game.summary || null,
    firstReleaseDate: game.first_release_date
      ? new Date(game.first_release_date * 1000) 
      : null,
    coverUrl: game.cover
      ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover}.jpg`
      : null,
    screenshots: game.screenshots,
    genres: game.genres,
    platforms: game.platforms,
    rating: game.rating || null,
    aggregatedRating: game.aggregated_rating || null,
    totalRatingCount: game.total_rating_count || null,
    url: game.url || null,
  };
};




module.exports = { handleCreateUser, saveGames };