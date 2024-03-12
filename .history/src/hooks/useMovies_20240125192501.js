export function useMovies ({ resultMovies }) {
  const movies = resultMovies?.Search?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return { movies }
}
