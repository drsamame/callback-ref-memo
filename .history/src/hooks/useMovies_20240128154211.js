import { useState, useRef } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies (query) {
  const [responseMovies, setResponseMovies] = useState({})
  const prevWord = useRef(query)
  const getMovies = async () => {
    if (prevWord.current === query) return
    setResponseMovies(await searchMovie(query))
  }
  return { movies: responseMovies, getMovies }
}
