export function useMovies ({ resultMovies }) {
  const mappedMovies = resultMovies?.Search?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  console.log(mappedMovies)
  return { mappedMovies }
}
