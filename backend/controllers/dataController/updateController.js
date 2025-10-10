// update controller 
const { prisma } = require("../../db/prismaClient.js");


async function handleUpdateGamePlatforms(game, platformData) {

  const originalPlatform = await getOriginalPlatform(platformData.releaseOrderIds);

  if (platformData.platformIds) {
    await prisma.game.update({
    where: { id: game.id },
    data: {
      platforms: {
      connect: platformData.platformIds.map((platform) => ({id: platform}))
      },
      originalPlatform: originalPlatform.name
     },
    });
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

module.exports = { handleUpdateGamePlatforms};