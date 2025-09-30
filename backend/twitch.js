let appAccessToken = null;
let tokenExpiry = 0;

async function getToken(appAccessToken, tokenExpiry) {
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
  return appAccessToken;// twitchToken.js
};
module.exports = { getToken };