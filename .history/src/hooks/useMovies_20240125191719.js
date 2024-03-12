import { useState } from 'react'
export function useMovies ({ resultMovies }) {
  const [movies] = useState(resultMovies.Search)
  return movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
}
