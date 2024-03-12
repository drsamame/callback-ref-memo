import { useState, useRef } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies (query) {
  const [responseMovies, setResponseMovies] = useState({})
  const prevWord = useRef()
  prevWord.current = query
  const getMovies = async () => {
    
    if (prevWord == query) return
    setResponseMovies(await searchMovie(query))
  }
  return { movies: responseMovies, getMovies }
}
