import { useState, useRef, useMemo } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies ({ query, sort }) {
  const [responseMovies, setResponseMovies] = useState([])
  const prevWord = useRef(query)

  const getMovies = useMemo(() => {
    return async () => {
      if (prevWord.current === query) return
      prevWord.current = query
      const newMovieList = await searchMovie(query)
      setResponseMovies(newMovieList)
    }
  }, [])

  /*
  const getSortedMovies = () => {
    console.log('getSortedMoviess')
    const sortMovies = sort
      ? [...responseMovies].sort((a, b) => a.title.localeCompare(b.title))
      : responseMovies
    return sortMovies
  }
  */
  const sortedMovies = useMemo(() => {
    // console.log('getSortedMoviess')
    return sort
      ? [...responseMovies].sort((a, b) => a.title.localeCompare(b.title))
      : responseMovies
  }, [sort, responseMovies])

  return { movies: sortedMovies, getMovies }
}
