import { useState } from "react"

export function useMovies (resultMovies) {
  const [responseMovies , setResponseMovies] = useState([])

  const movies = resultMovies?.Search
  const mappedMovies = movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return { movies: mappedMovies }
}
