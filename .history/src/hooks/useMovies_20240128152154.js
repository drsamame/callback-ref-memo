import { useState } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies (query) {
  const [responseMovies, setResponseMovies] = useState({})

  const getMovies = async () => {
    setResponseMovies(await searchMovie(query))
  }
  return { movies: responseMovies, getMovies }
}
