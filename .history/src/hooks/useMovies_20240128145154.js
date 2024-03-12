import { useState } from 'react'
import resultMovies from '../mocks/with-result.json'
import noResult from '../mocks/no-result.json'

export function useMovies (query) {
  const [responseMovies, setResponseMovies] = useState({})

  const getMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=27372fd2`)
    const resultJson = await response.json()

    if (resultJson.Response === 'True') {
      console.log('s')
      setResponseMovies(resultJson)
    } else {
      setResponseMovies(noResult)
    }
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
