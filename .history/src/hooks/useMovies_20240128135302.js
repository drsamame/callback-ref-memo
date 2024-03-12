import { useState } from "react"
import resultMovies from './mocks/with-result.json'
import noResult from './mocks/no-result.json'

export function useMovies (resultMovies) {
  const [responseMovies, setResponseMovies] = useState([])

  const getMovies = () => {
    return resultMovies
  }

  const movies = resultMovies?.Search
  const mappedMovies = movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return { movies: mappedMovies, getMovies }
}
