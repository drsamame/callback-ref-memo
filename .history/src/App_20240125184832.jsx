import { useState } from 'react'
import resultMovies from './mocks/with-result.json'
import { ListOfMovies, NoResults } from './components/Movies'
// import noResult from './mocks/no-result.json'
import './App.css'

function App () {
  const movies = resultMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form'>
          <input type='text' placeholder='Avengers, Start wars, Pokemon' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {
          hasMovies
            ? (
              <ListOfMovies />
              )
            : (
              <NoResults />
              )
        }
      </main>

    </div>
  )
}

export default App
