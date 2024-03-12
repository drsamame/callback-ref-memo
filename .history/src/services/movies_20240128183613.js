import noResult from '../mocks/no-result.json'

export async function searchMovie (query) {
  console.log(query)
  try {
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
  } catch (e) {
    throw new Error('Error buscando películas')
  }
}
