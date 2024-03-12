import { useState, useRef, useMemo } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies ({ query, sort }) {
  const [responseMovies, setResponseMovies] = useState([])
  const prevWord = useRef(query)

  const getMovies = useMemo(() => {
    console.log('se creo')
    return async (query) => {
      if (prevWord.current === query) return
      prevWord.current = query
      setResponseMovies(await searchMovie(query))
    }
  }, [query])

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
