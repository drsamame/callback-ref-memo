import { useState } from 'react'
import resultMovies from '../mocks/with-result.json'
import noResult from '../mocks/no-result.json'

export function useMovies () {
  const [responseMovies, setResponseMovies] = useState({})

  const getMovies = async () => {
    const response = await fetch('https://www.omdbapi.com/?s=avengers&apikey=27372fd2')
    console.log(response)
    const resultJson = await response.json()
    console.log(resultJson)
    if (resultJson.ok) {
      console.log(resultJson)
    }
    setResponseMovies(resultJson)
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
