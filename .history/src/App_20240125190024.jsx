import { useState } from 'react'
import resultMovies from './mocks/with-result.json'
import { Movies } from './components/Movies'
// import noResult from './mocks/no-result.json'
import './App.css'

function App () {
  const movies = resultMovies.Search


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
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
