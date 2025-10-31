

function normalizeGameData(rawGame) {

  if (!rawGame) {
     return null;
  } 

  return {
    id: rawGame.id,
    igdbId: rawGame.igdbId,
    name: rawGame.name ?? "Unknown Title",
    releaseDate: rawGame.firstReleaseDate ?? "Unknown",
    developer: rawGame.developer ?? "Unknown Developer",
    ageRating: rawGame.ageRating ?? "Unavailable",
    ageDescription: rawGame.ageRating?.description ?? "",
    rating: rawGame.rating ? Math.round(rawGame.rating) : null,
    cover: rawGame.coverUrl ?? "",
    platforms: rawGame.platforms,
    screenshots: normalizeScreenshots(rawGame.screenshots),
    summary: rawGame.summary ?? "",
    storyline: rawGame.storyline ?? "",
    url: rawGame.url ?? "",
  };
};

function normalizeScreenshots(screenshots) {
  if (!Array.isArray(screenshots)) {
      return [];
  }

  return screenshots.map(ss => ({
    id: ss.id,
    gameId: ss.gameId,
    url: ss.url?.replace("t_thumb", "t_screenshot_huge") ?? "",
    width: ss.width,
    height: ss.height,
  }));
};

export default normalizeGameData;