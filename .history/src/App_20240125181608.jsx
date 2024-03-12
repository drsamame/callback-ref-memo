import { useState } from 'react'
import resultMovies from './mocks/with-result.json'
import noResult from './mocks/no-result.json'
import './App.css'

function App() {
  const movies = resultMovies.Search
  const hasMovies = movies?.length > 0

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
                <li>
                  {JSON.stringify(resultMovies)}
                </li>
              </ul>
            )
        }
      </main>

    </div>
  )
}

export default App
