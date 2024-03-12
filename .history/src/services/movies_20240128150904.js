import resultMovies from '../mocks/with-result.json'
import noResult from '../mocks/no-result.json'

async function getServiceMovies(query) {
  const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=27372fd2`)
  const resultJson = await response.json()

  if (resultJson.Response === 'True') {
    const movies = responseMovies?.Search
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } else {
    setResponseMovies(noResult)
  }
}

export { getServiceMovies }
