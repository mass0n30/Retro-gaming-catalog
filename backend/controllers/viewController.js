// viewController
const {prisma} = require("../db/prismaClient.js");

async function getAllCategoryData(req, res, next) {

  try {
    const platforms = await prisma.platform.findMany();
    const years = [
      { id: 1, name: 1985 },
      { id: 2, name: 1986 },
      { id: 3, name: 1987 },
      { id: 4, name: 1988 },
      { id: 5, name: 1989 },
      { id: 6, name: 1990 },
      { id: 7, name: 1991 },
      { id: 8, name: 1992 },
      { id: 9, name: 1993 },
      { id: 10, name: 1994 },
      { id: 11, name: 1995 },
      { id: 12, name: 1996 },
      { id: 13, name: 1997 },
      { id: 14, name: 1998 },
      { id: 15, name: 1999 },
      { id: 16, name: 2000 },
      { id: 17, name: 2001 },
      { id: 18, name: 2002 },
      { id: 19, name: 2003 },
      { id: 20, name: 2004 },
      { id: 21, name: 2005 },
      { id: 22, name: 2006 },
    ];

    const genres = await prisma.genre.findMany();
    const developers = await prisma.developers.findMany();

   
    const allData = [
        {
          category: "Consoles",
          array: platforms
        },
        {
          category: "Genres",
          array: genres
        },
        {
          category: "Developers",
          array: developers
        },
        {
          category: "Years",
          array: years
        }
    ];

    return ({platforms, years, genres, developers, allData})
  } catch (error) {
    next(error);
  }

};


async function handleGetGames(req, res, next) {

  console.log(req.query, 'query');

  try {
    const { genre, platform, developer, name, search, offset, limit } = req.query;

    const games = await prisma.game.findMany({
      where: {
        genres: genre != "undefined" ? { some: genre } : undefined,
        platforms: platform != "undefined" ? { some: platform } : undefined,
        developerId: developer != "undefined" ? developer : undefined,
        name: name != "undefined" ? name : undefined,
      },
      include: {
        screenshots: true,
        developer: true,
        platforms: true,
        ageRating: true,
      },
      take: parseInt(limit),
      skip: parseInt(offset),
    });
    res.json({games});
    
  } catch (error) {
    next(error)
  }
};

async function handleGetGameDetails(req, res, next) {

  const gameId = parseInt(req.params.gameid);

  try {

    const gameDetails = await prisma.game.findUnique({
      where: {
        id: gameId
      }
    });
    return gameDetails;
    
  } catch (error) {
    next(error)
  }
};


module.exports = {handleGetGames, handleGetGameDetails, getAllCategoryData};