import { useState } from 'react'
import resultMovies from './mocks/with-result.json'
import noResult from './mocks/no-result.json'
import './App.css'

function App() {
  const movies = resultMovies.Search
  const hasMovies = movies?.length > 0

  const renderMovies = () => {
    return (
      <ul>
        {
          movies.map((movie) => {
            return (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            )
          })
        }
      </ul>
    )
  }

  const noResult = () => {
    return (
      <p>No se encontraron películas</p>
    )
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form'>
          <input type='text' id='' placeholder='Avengers, Start wars, Pokemon' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {
          hasMovies
            ? (
                renderMovies()
              )
            : (
                noResult
              )
        }
      </main>

    </div>
  )
}

export default App
