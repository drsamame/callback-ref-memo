export async function searchMovie (query) {
  if (query === '') return null
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=27372fd2`)
    const resultJson = await response.json()

    const movies = resultJson?.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error buscando películas')
  }
}
