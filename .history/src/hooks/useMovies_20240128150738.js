import { useState } from 'react'
import resultMovies from '../mocks/with-result.json'
import noResult from '../mocks/no-result.json'
import { getServiceMovies } from '../services/movies'

export function useMovies (query) {
  const [responseMovies, setResponseMovies] = useState({})

  const getMovies = async () => {
    getServiceMovies(query)
  }

  const movies = responseMovies?.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies, getMovies }
}
