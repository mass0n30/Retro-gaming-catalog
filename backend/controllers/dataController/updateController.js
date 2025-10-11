// update controller 
const { prisma } = require("../../db/prismaClient.js");


async function handleUpdateGamePlatforms(game, platformData) {

  const originalPlatform = await getOriginalPlatform(platformData.releaseOrderIds);

  if (platformData.platformIds) {
    const updatedGame = await prisma.game.update({
    where: { id: game.id },
    data: {
      platforms: {
      connect: platformData.platformIds.map((platform) => ({id: platform}))
      },
      originalPlatform: originalPlatform.name
     },
    });
    return updatedGame;
  }
};

async function getOriginalPlatform(releaseOrderIds) {

  releaseOrderIds.sort(function(a, b) {
    return a - b;
  });

  const first = releaseOrderIds.shift();

  const originalPlatform = await prisma.platform.findUnique({
      where: {releaseOrder: first},
    });
    return originalPlatform;
};

const {allRatingsData} = require('../../db/platformPopulate.js');

async function handleUpdateGameAgeRating(ageRatingId, game) {

  for (i = 0; i < allRatingsData.length; i++) {
    if (ageRatingId == allRatingsData[i].id) {
      ageRatingId = allRatingsData[i].id
    }
  };

  if (ageRatingId !== null) {
    const updatedGame = await prisma.game.update({
      where: { id: game.id },
      data: {ageRatingId: ageRatingId},
    });
    return updatedGame;
  }
};

module.exports = { handleUpdateGamePlatforms, handleUpdateGameAgeRating};