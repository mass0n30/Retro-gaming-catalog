const { PrismaClient } = require('../generated/prisma/client');
const prisma = new PrismaClient();

async function checkEmail(value) {

  const user = await prisma.user.findUnique({
    where: {
      email: value,
    },
  });

  if (user) {
    return true;
  } else {
    return false;
  }
};

async function checkUser(id) {
  
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (user) {
    return user;
  } else {
    throw new Error("No found user.");
  }
};

async function checkUserByEmail(value) {

  const user = await prisma.user.findUnique({
    where: {
      email: value,
    },
  });

  if (user) {
    return user;
  } else {
    throw new Error("No found user.");
  }
};

async function checkGame(id) {
  
  const game = await prisma.game.findUnique({
    where: {
      id: id,
    },
  });

  if (game) {
    return game;
  } else {
    // fetchGame from IGDB API
    // throw new Error("No found game.");
  }
};

module.exports = {
  checkEmail,
  checkUser,
  checkUserByEmail,
  checkGame
}