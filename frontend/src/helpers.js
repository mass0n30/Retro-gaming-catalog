
function handleSetData(res, setGames, setCategoryData) {
  console.log(res, 'res')
     setCategoryData(res.data.categoryData);
     setGames(res.data.gamesData);
};

export default handleSetData;