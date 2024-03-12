import resultMovies from './mocks/with-result.json'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
// import noResult from './mocks/no-result.json'
import './App.css'
import { useState } from 'react'

function App () {
  const { movies } = useMovies(resultMovies)
  const { query, setQuery } = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(query)
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} type='text' placeholder='Avengers, Start wars, Pokemon' />
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
