import { useState } from 'react'
import { getServiceMovies } from '../services/movies'

export function useMovies (query) {
  const [responseMovies, setResponseMovies] = useState({})

  const getMovies = () => {
    setResponseMovies(getServiceMovies(query))
  }

  return { movies: responseMovies, getMovies }
}
