import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies ({ query, sort }) {
  const [responseMovies, setResponseMovies] = useState([])
  const prevWord = useRef(query)

  const getMovies = useCallback(async ({ query }) => {
    if (prevWord.current === query) return
    prevWord.current = query
    const newMovieList = await searchMovie(query)
    setResponseMovies(newMovieList)
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
    console.log(responseMovies)
    // console.log('getSortedMoviess')
    return sort
      ? [...responseMovies].sort((a, b) => a.title.localeCompare(b.title))
      : responseMovies
  }, [sort, responseMovies])

  return { movies: sortedMovies, getMovies }
}
