

function getPageMax(numberOfGames) {

  const maxPage = parseInt(numberOfGames / 20);

  return maxPage;

}

export default { getPageMax };