import { useState } from 'react'
import resultMovies from '../mocks/with-result.json'
import noResult from '../mocks/no-result.json'

export function useMovies () {
  const [responseMovies, setResponseMovies] = useState({})

  const getMovies = async () => {
    setResponseMovies(resultMovies)
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=27372fd')
  }

  const movies = responseMovies?.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies, getMovies }
}
