
//double check this upon game loadins
function getPaginationCount(gameCount) {

  const pageCount = gameCount / 25;

  if (gameCount % 25 > 0) {
    return parseInt(pageCount + 1);
  }
  return pageCount;
}

function yearsLoader() {

  const searchParams = new URLSearchParams()

}


export default getPaginationCount ;