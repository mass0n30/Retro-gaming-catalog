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

  async function handleCreateCover(gameCover) {
    if (gameCover) {
      await prisma.cover.upsert({
        where: { id: gameCover.id },
        create: {
          url: gameCover.url,
          gameId: gameCover.game,
          imageId: gameCover.image_id,
        },
        update: {
          url: gameCover.url,
          gameId: gameCover.game,
          imageId: gameCover.image_id,
        },
      });
    }
  };

  async function handleCreateScreenshots(gameScreenshots) {
    if (gameScreenshots) {
      await Promise.all(
        gameScreenshots.map((screenshot) => {
          prisma.screenshot.upsert({
            where: { id: screenshot.id },
            create: { 
              imageId: screenshot.image_id, 
              url: screenshot.url,
              height: screenshot.height,
              width: screenshot.width,
              gameId: screenshot.game
            },
            update: { 
              imageId: screenshot.image_id, 
              url: screenshot.url,
              gameId: screenshot.game
            },
          });
        }));
    }
  };

  async function handleCreateGenre(gameGenres) {
    if (gameGenres) {
      gameGenres.map((genre) => {
        prisma.genre.upsert({
          where: { id: genre.id },
          update: { name: genre.name, slug: genre.slug },
          create: { id: genre.id, name: genre.name, slug: genre.slug },
        });
      });
    }
  };




module.exports = { handleCreateUser, handleCreateCover, handleCreateScreenshots, handleCreateGenre };