import { useState, useRef } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies ({ query, sort }) {
  const [responseMovies, setResponseMovies] = useState({})
  const prevWord = useRef(query)

  const getMovies = async () => {
    if (prevWord.current === query) return
    prevWord.current = query
    setResponseMovies(await searchMovie(query))
  }

  const sortMovies = sort ? [...responseMovies].sort((a, b) => a.title.localCompare(b.title)) : responseMovies

  return { movies: sortMovies, getMovies }
}
