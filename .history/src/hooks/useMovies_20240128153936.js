import { useState, useRef } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies (query) {
  const [responseMovies, setResponseMovies] = useState({})
  const isTheSameMovie = useRef(query)
  const getMovies = async () => {
    isTheSameMovie.current = query
    setResponseMovies(await searchMovie(query))
  }
  return { movies: responseMovies, getMovies }
}
