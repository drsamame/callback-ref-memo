async function getServiceMovies () {
  const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=27372fd2`)
  const resultJson = await response.json()

  if (resultJson.Response === 'True') {
    setResponseMovies(resultJson)
  } else {
    setResponseMovies(noResult)
  }
  return {

  }
}

export { getServiceMovies }