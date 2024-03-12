import noResult from '../mocks/no-result.json'

export async function getServiceMovies (query) {
  const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=27372fd2`)
  const resultJson = await response.json()

  if (resultJson.Response === 'True') {
    const movies = resultJson?.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } else {
    return noResult
  }
}
