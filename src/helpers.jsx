
//double check this upon game loadins
function getPaginationCount(gameCount) {

  const pageCount = gameCount / 20;

  if (gameCount % 20 > 0) {
    return parseInt(pageCount + 1);
  }
  return pageCount;
}

function yearsLoader() {

  const searchParams = new URLSearchParams()

}


export default getPaginationCount ;