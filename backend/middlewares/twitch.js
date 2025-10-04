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
  console.log(data);
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
    const year = 2000; 
    const games = await apicalypse(options)
    .fields('age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,collections,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,game_status,game_type,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites')
    .limit(50)    
    .query(`first_release_date >= ${new Date(year, 0).getTime() / 1000} & first_release_date < ${new Date(year + 1, 0).getTime() / 1000};`)

    .request('/games'); 
    res.json(games);
  } catch (error) {
     next(error);
  }
};

async function getGamesByPlatform(req, res, next) { 
  try {   
    const options = await requestOptions();
    const platformId = 4; 
    const games = await apicalypse(options)
    .fields('age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,collections,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,game_status,game_type,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites')
    .limit(50)    
    .query(`platforms = (${platformId});`)

    .request('/games'); 
    res.json(games);
    } catch (error) {
    next(error);
  }
};   

module.exports = { getGamesByYear, getGamesByPlatform };