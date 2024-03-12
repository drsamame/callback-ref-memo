import { useState } from 'react'
import { getServiceMovies } from '../services/movies'

export function useMovies (query) {
  const [responseMovies, setResponseMovies] = useState({})

  const getMovies = async () => {
    console.log(await getServiceMovies(query))
    setResponseMovies(await getServiceMovies(query))
  }
  console.log(responseMovies)
  return { movies: responseMovies, getMovies }
}
