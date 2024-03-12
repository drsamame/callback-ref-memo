export function useMovies ({ resultMovies }) {
  const movies = resultMovies.Search
  return movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
}