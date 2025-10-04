let authenticationToken = null;

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
  console.log(data);
  return data.access_token;
  }
};

async function getGamesByYear(req, res, next) { 
  try {   
    const year = parseInt(req.params.year); 
    const games = await req.prisma.game.findMany({
        where: { release_year: year },
        include: { platform: true } 
      });
    res.json(games);
  } catch (error) {
     next(error);
  }
};

async function getGamesByPlatform(req, res, next) { 
  try {   
    const platformId = parseInt(req.params.platformId); 
    const games = await req.prisma.game.findMany({
      where: { platform_id: platformId },
      include: { platform: true } 
    });
    res.json(games);
  } catch (error) {
    next(error);
  }
};   

module.exports = { getGamesByYear, getGamesByPlatform };